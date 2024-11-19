import { NextResponse } from 'next/server';
import Snoowrap from 'snoowrap';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';
import { authOptions } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

// Initialize the Snoowrap client
const getRedditClient = () => {
  const requiredEnvVars = {
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD,
    userAgent: process.env.REDDIT_USER_AGENT,
  };

  // Check if any required environment variables are missing
  const missingVars = Object.entries(requiredEnvVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }

  return new Snoowrap({
    userAgent: requiredEnvVars.userAgent!,
    clientId: requiredEnvVars.clientId!,
    clientSecret: requiredEnvVars.clientSecret!,
    username: requiredEnvVars.username!,
    password: requiredEnvVars.password!,
  });
};

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get user's subreddits from database
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { subreddits: true }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    if (!user.subreddits || user.subreddits.length === 0) {
      return NextResponse.json([]);
    }

    const reddit = getRedditClient();
    
    const subreddits = await Promise.all(
      user.subreddits.map(async (name) => {
        try {
          const subreddit = await reddit.getSubreddit(name).fetch();
          return {
            name: subreddit.display_name,
            description: subreddit.description || '',
            subscribers: subreddit.subscribers || 0,
            created_utc: subreddit.created_utc || Math.floor(Date.now() / 1000),
            public_description: subreddit.public_description || '',
            over18: subreddit.over18 || false,
          };
        } catch (error) {
          console.error(`Error fetching subreddit ${name}:`, error);
          return null;
        }
      })
    );

    const validSubreddits = subreddits.filter((s): s is NonNullable<typeof s> => s !== null);
    return NextResponse.json(validSubreddits);
  } catch (error) {
    console.error('Error in subreddits API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subreddit information' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { subredditName } = body;

    if (!subredditName) {
      return NextResponse.json(
        { error: 'No subreddit name provided' },
        { status: 400 }
      );
    }

    // Verify the subreddit exists before adding it
    const reddit = getRedditClient();
    try {
      const subreddit = await reddit.getSubreddit(subredditName).fetch();

      // Add subreddit to user's list
      const user = await prisma.user.update({
        where: { email: session.user.email },
        data: {
          subreddits: {
            push: subredditName
          }
        }
      });

      return NextResponse.json({
        name: subreddit.display_name,
        description: subreddit.description || '',
        subscribers: subreddit.subscribers || 0,
        created_utc: subreddit.created_utc || Math.floor(Date.now() / 1000),
        public_description: subreddit.public_description || '',
        over18: subreddit.over18 || false,
      });
    } catch (error) {
      console.error('Error verifying subreddit:', error);
      return NextResponse.json(
        { error: 'Invalid subreddit name or subreddit not found' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error in subreddits API:', error);
    return NextResponse.json(
      { error: 'Failed to add subreddit' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { subredditName } = body;

    if (!subredditName) {
      return NextResponse.json(
        { error: 'No subreddit name provided' },
        { status: 400 }
      );
    }

    // Get current user's subreddits
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: { subreddits: true }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Remove the subreddit from the list
    const updatedSubreddits = user.subreddits.filter(name => name !== subredditName);

    // Update user's subreddits
    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        subreddits: updatedSubreddits
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in subreddits API:', error);
    return NextResponse.json(
      { error: 'Failed to remove subreddit' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import Snoowrap from 'snoowrap';

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

interface Context {
  params: {
    subreddit: string;
  };
}

export async function GET(request: Request, context: Context) {
  try {
    const { subreddit } = context.params;
    
    if (!subreddit) {
      return NextResponse.json(
        { error: 'Subreddit name is required' },
        { status: 400 }
      );
    }

    const reddit = getRedditClient();
    
    // Get posts from the last 24 hours
    const oneDayAgo = Math.floor(Date.now() / 1000) - 24 * 60 * 60;
    
    const subredditClient = reddit.getSubreddit(subreddit);
    const posts = await subredditClient.getTop({ time: 'day', limit: 100 });
    
    const formattedPosts = posts
      .filter((post: any) => post.created_utc >= oneDayAgo)
      .map((post: any) => ({
        id: post.id,
        title: post.title,
        score: post.score,
        content: post.selftext,
        url: post.url,
        created_utc: post.created_utc,
        num_comments: post.num_comments,
      }));

    if (formattedPosts.length === 0) {
      return NextResponse.json(
        { error: 'No posts found in the last 24 hours' },
        { status: 404 }
      );
    }

    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error('Error in posts API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subreddit posts' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import { getRedditClient } from '@/lib/reddit';

export async function GET() {
  try {
    // Test the Reddit client initialization
    const client = getRedditClient();
    
    // Try to fetch a test subreddit
    const subreddit = client.getSubreddit('test');
    const info = await subreddit.fetch();
    
    return NextResponse.json({
      success: true,
      message: 'Reddit API connection successful',
      subredditInfo: {
        name: info.display_name,
        subscribers: info.subscribers,
      },
      config: {
        hasClientId: !!process.env.REDDIT_CLIENT_ID,
        hasClientSecret: !!process.env.REDDIT_CLIENT_SECRET,
        hasUsername: !!process.env.REDDIT_USERNAME,
        hasPassword: !!process.env.REDDIT_PASSWORD,
        userAgent: process.env.REDDIT_USER_AGENT,
      },
    });
  } catch (error) {
    console.error('Reddit API test failed:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      config: {
        hasClientId: !!process.env.REDDIT_CLIENT_ID,
        hasClientSecret: !!process.env.REDDIT_CLIENT_SECRET,
        hasUsername: !!process.env.REDDIT_USERNAME,
        hasPassword: !!process.env.REDDIT_PASSWORD,
        userAgent: process.env.REDDIT_USER_AGENT,
      },
    }, { status: 500 });
  }
}

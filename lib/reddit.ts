import Snoowrap from 'snoowrap';

// Initialize the Snoowrap client
export const getRedditClient = () => {
  const requiredEnvVars = {
    clientId: process.env.NEXT_PUBLIC_REDDIT_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_REDDIT_CLIENT_SECRET,
    username: process.env.NEXT_PUBLIC_REDDIT_USERNAME,
    password: process.env.NEXT_PUBLIC_REDDIT_PASSWORD,
    userAgent: process.env.NEXT_PUBLIC_REDDIT_USER_AGENT,
  };

  // Check if any required environment variables are missing
  const missingVars = Object.entries(requiredEnvVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }

  // Log the configuration (without sensitive data)
  console.log('Reddit client configuration:', {
    userAgent: requiredEnvVars.userAgent,
    hasClientId: !!requiredEnvVars.clientId,
    hasClientSecret: !!requiredEnvVars.clientSecret,
    hasUsername: !!requiredEnvVars.username,
    hasPassword: !!requiredEnvVars.password,
  });

  return new Snoowrap({
    userAgent: requiredEnvVars.userAgent!,
    clientId: requiredEnvVars.clientId!,
    clientSecret: requiredEnvVars.clientSecret!,
    username: requiredEnvVars.username!,
    password: requiredEnvVars.password!,
  });
};

export interface RedditPost {
  id: string;
  title: string;
  score: number;
  content: string;
  url: string;
  created_utc: number;
  num_comments: number;
}

export interface SubredditInfo {
  name: string;
  description: string;
  subscribers: number;
  created_utc: number;
  public_description: string;
  over18: boolean;
}

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    // Client-side
    return '';
  }
  // Server-side
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return `http://localhost:${process.env.PORT || 3000}`;
}

export async function getMultipleSubredditsInfo(subredditNames: string[]): Promise<SubredditInfo[]> {
  console.log(`Fetching info for multiple subreddits: ${subredditNames.join(', ')}`);
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/subreddits?names=${subredditNames.join(',')}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch subreddit information');
    }
    return response.json();
  } catch (error) {
    console.error('Detailed error fetching multiple subreddits info:', {
      subreddits: subredditNames,
      error: error instanceof Error ? {
        name: error.name,
        message: error.message,
        stack: error.stack,
      } : error,
    });
    throw error;
  }
}

export async function getSubredditInfo(subredditName: string): Promise<SubredditInfo> {
  const info = await getMultipleSubredditsInfo([subredditName]);
  if (!info || info.length === 0) {
    throw new Error(`Could not find subreddit: ${subredditName}`);
  }
  return info[0];
}

export async function getTopPosts(subredditName: string): Promise<RedditPost[]> {
  console.log(`Fetching top posts for subreddit: ${subredditName}`);
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/subreddits/${subredditName}/posts`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch posts');
    }
    return response.json();
  } catch (error) {
    console.error('Detailed error fetching top posts:', {
      subreddit: subredditName,
      error: error instanceof Error ? {
        name: error.name,
        message: error.message,
        stack: error.stack,
      } : error,
    });
    throw error;
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getRedditClient, getTopPosts } from '@/lib/reddit'

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    // Get the subreddit name from the URL parameters
    const { name } = params
    if (!name) {
      return NextResponse.json(
        { error: 'Subreddit name is required' },
        { status: 400 }
      )
    }

    // Get the top posts for the subreddit
    const posts = await getTopPosts(name)
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching subreddit posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch subreddit posts' },
      { status: 500 }
    )
  }
}

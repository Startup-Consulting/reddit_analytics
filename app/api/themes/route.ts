import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { RedditPost, PostTheme } from '@/lib/types'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const CATEGORIZATION_PROMPT = `
Analyze the following Reddit post and categorize it into the following themes. Respond with a JSON object containing boolean flags for each theme:

Themes:
1. Solution Requests: Posts seeking solutions for specific problems
2. Pain & Anger: Posts expressing frustration, pain, or anger
3. Advice Requests: Posts asking for guidance or recommendations
4. Money Talk: Posts discussing financial aspects or spending

Example response format:
{
  "isSolutionRequest": true,
  "isPainAndAnger": false,
  "isAdviceRequest": true,
  "isMoneyTalk": false
}

Post Title: {title}
Post Content: {content}
`

async function categorizePost(post: RedditPost): Promise<PostTheme> {
  try {
    const prompt = CATEGORIZATION_PROMPT
      .replace('{title}', post.title)
      .replace('{content}', post.content || '')

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a Reddit post analyzer that categorizes posts into predefined themes. Respond only with the JSON object as specified.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.1,
      response_format: { type: 'json_object' },
    })

    const result = JSON.parse(completion.choices[0].message.content || '{}')
    return {
      isSolutionRequest: result.isSolutionRequest || false,
      isPainAndAnger: result.isPainAndAnger || false,
      isAdviceRequest: result.isAdviceRequest || false,
      isMoneyTalk: result.isMoneyTalk || false,
    }
  } catch (error) {
    console.error('Error categorizing post:', error)
    return {
      isSolutionRequest: false,
      isPainAndAnger: false,
      isAdviceRequest: false,
      isMoneyTalk: false,
    }
  }
}

export async function POST(request: Request) {
  try {
    const posts = await request.json() as RedditPost[]
    
    // Process posts in parallel with a concurrency limit of 5
    const concurrencyLimit = 5
    const results: PostTheme[] = []
    
    for (let i = 0; i < posts.length; i += concurrencyLimit) {
      const batch = posts.slice(i, i + concurrencyLimit)
      const batchResults = await Promise.all(
        batch.map(post => categorizePost(post))
      )
      results.push(...batchResults)
    }
    
    return NextResponse.json(results)
  } catch (error) {
    console.error('Error processing themes:', error)
    return NextResponse.json(
      { error: 'Failed to process themes' },
      { status: 500 }
    )
  }
}

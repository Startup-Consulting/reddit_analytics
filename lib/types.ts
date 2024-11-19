export interface RedditPost {
  id: string
  title: string
  score: number
  content: string
  url: string
  created_utc: number
  num_comments: number
}

export interface PostTheme {
  isSolutionRequest: boolean
  isPainAndAnger: boolean
  isAdviceRequest: boolean
  isMoneyTalk: boolean
}

export interface CategorizedPost extends RedditPost {
  themes: PostTheme
}

export interface ThemeStats {
  name: string
  description: string
  count: number
  posts: CategorizedPost[]
}

export const THEME_DESCRIPTIONS = {
  solutionRequest: {
    name: 'Solution Requests',
    description: 'Posts seeking solutions for specific problems'
  },
  painAndAnger: {
    name: 'Pain & Anger',
    description: 'Posts expressing frustration, pain, or anger'
  },
  adviceRequest: {
    name: 'Advice Requests',
    description: 'Posts asking for guidance or recommendations'
  },
  moneyTalk: {
    name: 'Money Talk',
    description: 'Posts discussing financial aspects or spending'
  }
}

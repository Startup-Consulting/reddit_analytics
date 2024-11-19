"use client"

import { useEffect, useState } from 'react'
import { CategorizedPost, RedditPost, ThemeStats, THEME_DESCRIPTIONS } from '@/lib/types'
import { ThemeCard } from '@/components/theme-card'
import { SidePanel } from '@/components/side-panel'
import { useToast } from '@/components/ui/use-toast'

interface ThemesProps {
  posts: RedditPost[]
}

export function Themes({ posts }: ThemesProps) {
  const [loading, setLoading] = useState(true)
  const [categorizedPosts, setCategorizedPosts] = useState<CategorizedPost[]>([])
  const [selectedTheme, setSelectedTheme] = useState<ThemeStats | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    const analyzePosts = async () => {
      setLoading(true)
      try {
        const response = await fetch('/api/themes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(posts),
        })

        if (!response.ok) {
          throw new Error('Failed to analyze posts')
        }

        const themes = await response.json()
        const categorized = posts.map((post, index) => ({
          ...post,
          themes: themes[index],
        }))
        setCategorizedPosts(categorized)
      } catch (error) {
        console.error('Error analyzing posts:', error)
        toast({
          title: 'Error',
          description: 'Failed to analyze posts. Please try again later.',
          variant: 'destructive',
        })
      } finally {
        setLoading(false)
      }
    }

    analyzePosts()
  }, [posts, toast])

  const themeStats: ThemeStats[] = [
    {
      ...THEME_DESCRIPTIONS.solutionRequest,
      count: categorizedPosts.filter(post => post.themes.isSolutionRequest).length,
      posts: categorizedPosts.filter(post => post.themes.isSolutionRequest),
    },
    {
      ...THEME_DESCRIPTIONS.painAndAnger,
      count: categorizedPosts.filter(post => post.themes.isPainAndAnger).length,
      posts: categorizedPosts.filter(post => post.themes.isPainAndAnger),
    },
    {
      ...THEME_DESCRIPTIONS.adviceRequest,
      count: categorizedPosts.filter(post => post.themes.isAdviceRequest).length,
      posts: categorizedPosts.filter(post => post.themes.isAdviceRequest),
    },
    {
      ...THEME_DESCRIPTIONS.moneyTalk,
      count: categorizedPosts.filter(post => post.themes.isMoneyTalk).length,
      posts: categorizedPosts.filter(post => post.themes.isMoneyTalk),
    },
  ]

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 bg-muted animate-pulse rounded-lg" />
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {themeStats.map((theme) => (
          <ThemeCard
            key={theme.name}
            theme={theme}
            onClick={() => setSelectedTheme(theme)}
          />
        ))}
      </div>

      <SidePanel
        open={selectedTheme !== null}
        onOpenChange={(open) => !open && setSelectedTheme(null)}
        theme={selectedTheme || { name: '', posts: [] }}
      />
    </>
  )
}

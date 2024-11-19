"use client"

import { useState, useEffect } from 'react'
import { SubredditCard } from '@/components/subreddit-card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { AddSubredditModal } from '@/components/add-subreddit-modal'
import { SubredditInfo } from '@/lib/reddit'
import { useToast } from '@/components/ui/use-toast'

export function SubredditList() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [subreddits, setSubreddits] = useState<SubredditInfo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  // Load user's subreddits
  const fetchUserSubreddits = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/subreddits')
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to fetch subreddits')
      }
      const data = await response.json()
      console.log('Fetched subreddits:', data) // Debug log
      setSubreddits(data)
    } catch (error) {
      console.error('Error fetching subreddits:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to load your subreddits',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Initial load of subreddits
  useEffect(() => {
    fetchUserSubreddits()
  }, [])

  const handleAddSubreddit = async (subredditName: string) => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/subreddits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subredditName }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to add subreddit')
      }

      const newSubreddit = await response.json()
      console.log('Added subreddit:', newSubreddit) // Debug log
      setSubreddits(prev => [...prev, newSubreddit])

      toast({
        title: 'Success',
        description: `Added r/${subredditName} to your list`,
      })

      return newSubreddit
    } catch (error) {
      console.error('Error adding subreddit:', error)
      const errorMessage = error instanceof Error
        ? error.message
        : `Failed to add r/${subredditName}`

      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      })
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const handleRemoveSubreddit = async (subredditName: string) => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/subreddits', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subredditName }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to remove subreddit')
      }

      setSubreddits(prev => prev.filter(s => s.name !== subredditName))

      toast({
        title: 'Success',
        description: `Removed r/${subredditName} from your list`,
      })
    } catch (error) {
      console.error('Error removing subreddit:', error)
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to remove subreddit',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-gray-100 rounded-lg animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subreddits.map((subreddit) => (
            <SubredditCard
              key={subreddit.name}
              subreddit={subreddit}
              onRemove={() => handleRemoveSubreddit(subreddit.name)}
            />
          ))}
          <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors">
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Subreddit
            </Button>
          </div>
        </div>
      )}

      <AddSubredditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddSubreddit}
      />
    </div>
  )
}

"use client"

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface AddSubredditModalProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (subredditName: string) => Promise<any>
}

export function AddSubredditModal({ isOpen, onClose, onAdd }: AddSubredditModalProps) {
  const [subredditInput, setSubredditInput] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!subredditInput.trim()) {
      setError('Please enter a subreddit name')
      return
    }

    // Extract subreddit name from input (handle both full URLs and plain names)
    let subredditName = subredditInput.trim()
    if (subredditName.startsWith('r/')) {
      subredditName = subredditName.slice(2)
    }
    if (subredditName.includes('/')) {
      const matches = subredditName.match(/\/r\/([^\/]+)/)
      if (matches) {
        subredditName = matches[1]
      }
    }

    setIsLoading(true)
    try {
      await onAdd(subredditName)
      setSubredditInput('')
      setError('')
      onClose()
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to add subreddit')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Subreddit</DialogTitle>
          <DialogDescription>
            Enter a subreddit name or paste a Reddit URL to add it to your analytics.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              placeholder="Enter subreddit name (e.g., 'reactjs') or URL"
              value={subredditInput}
              onChange={(e) => {
                setSubredditInput(e.target.value)
                setError('')
              }}
              className={error ? 'border-red-500' : ''}
              disabled={isLoading}
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </div>
          <div className="flex justify-end space-x-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => {
                onClose()
                setSubredditInput('')
                setError('')
              }}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Adding...' : 'Add Subreddit'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

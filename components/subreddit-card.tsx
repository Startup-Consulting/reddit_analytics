import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { X } from 'lucide-react'
import { SubredditInfo } from '@/lib/reddit'

interface SubredditCardProps {
  subreddit: SubredditInfo
  onRemove?: () => void
}

export function SubredditCard({ subreddit, onRemove }: SubredditCardProps) {
  const { name, description, public_description, subscribers } = subreddit

  return (
    <div className="relative">
      <Link href={`/subreddits/${name}`} className="block h-full">
        <Card className="h-full border-2 border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl font-bold text-blue-600">r/{name}</CardTitle>
          </CardHeader>
          <CardContent>
            {(public_description || description) && (
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {public_description || description}
              </p>
            )}
            {subscribers !== undefined && (
              <p className="text-sm font-medium text-gray-600">
                {subscribers.toLocaleString()} subscribers
              </p>
            )}
          </CardContent>
        </Card>
      </Link>
      {onRemove && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-6 w-6 rounded-full hover:bg-red-100 hover:text-red-600"
          onClick={(e) => {
            e.preventDefault()
            onRemove()
          }}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

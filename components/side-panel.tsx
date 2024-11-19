"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'
import { ScrollArea } from './ui/scroll-area'
import { CategorizedPost } from '@/lib/types'
import { formatDistanceToNow } from 'date-fns'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { ArrowUpIcon, MessageSquare } from 'lucide-react'

interface SidePanelProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  theme: {
    name: string
    posts: CategorizedPost[]
  }
}

export function SidePanel({ open, onOpenChange, theme }: SidePanelProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px] p-0">
        <SheetHeader className="px-6 py-4 border-b">
          <SheetTitle>{theme.name}</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-80px)]">
          <div className="px-6 py-4 space-y-4">
            {theme.posts.map((post) => (
              <Card key={post.id} className="border shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <ArrowUpIcon className="h-4 w-4 mr-1" />
                      {post.score}
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {post.num_comments}
                    </div>
                    <div>
                      {formatDistanceToNow(post.created_utc * 1000, { addSuffix: true })}
                    </div>
                  </div>
                  {post.content && (
                    <p className="text-sm line-clamp-3">{post.content}</p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.themes.isSolutionRequest && (
                      <Badge variant="secondary">Solution Request</Badge>
                    )}
                    {post.themes.isPainAndAnger && (
                      <Badge variant="secondary">Pain & Anger</Badge>
                    )}
                    {post.themes.isAdviceRequest && (
                      <Badge variant="secondary">Advice Request</Badge>
                    )}
                    {post.themes.isMoneyTalk && (
                      <Badge variant="secondary">Money Talk</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

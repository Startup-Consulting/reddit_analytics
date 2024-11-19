"use client"

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ThemeStats } from '@/lib/types'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'

interface ThemeCardProps {
  theme: ThemeStats
  onClick: () => void
}

export function ThemeCard({ theme, onClick }: ThemeCardProps) {
  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow duration-200"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold flex justify-between items-center">
          <span>{theme.name}</span>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">
          {theme.description}
        </p>
        <p className="text-sm font-medium">
          {theme.count} {theme.count === 1 ? 'post' : 'posts'}
        </p>
      </CardContent>
    </Card>
  )
}

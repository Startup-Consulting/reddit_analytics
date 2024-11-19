"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { RedditPost } from "@/lib/reddit"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"

interface PostsTableProps {
  posts: RedditPost[]
}

export function PostsTable({ posts }: PostsTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Title</TableHead>
            <TableHead className="text-right">Score</TableHead>
            <TableHead className="text-right">Comments</TableHead>
            <TableHead className="text-right">Posted</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">
                <Link
                  href={post.url}
                  target="_blank"
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </TableCell>
              <TableCell className="text-right">{post.score}</TableCell>
              <TableCell className="text-right">{post.num_comments}</TableCell>
              <TableCell className="text-right">
                {formatDistanceToNow(post.created_utc * 1000, { addSuffix: true })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

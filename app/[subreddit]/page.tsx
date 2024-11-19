import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { getTopPosts } from "@/lib/reddit"
import { PostsTable } from "@/components/posts-table"
import { Themes } from "./themes"

interface SubredditPageProps {
  params: {
    subreddit: string
  }
}

export async function generateMetadata({
  params,
}: SubredditPageProps): Promise<Metadata> {
  return {
    title: `r/${params.subreddit} Analysis`,
  }
}

export default async function SubredditPage({ params }: SubredditPageProps) {
  const { subreddit } = params
  const posts = await getTopPosts(subreddit)

  return (
    <div className="container py-6">
      <div className="flex flex-col gap-8">
        <div>
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold">r/{subreddit}</h1>
          <p className="text-muted-foreground">
            View analytics and insights for r/{subreddit}
          </p>
        </div>

        <Tabs defaultValue="top-posts" className="w-full">
          <TabsList>
            <TabsTrigger value="top-posts">Top Posts</TabsTrigger>
            <TabsTrigger value="themes">Themes</TabsTrigger>
          </TabsList>
          <TabsContent value="top-posts">
            <div className="mt-4">
              <PostsTable posts={posts} />
            </div>
          </TabsContent>
          <TabsContent value="themes">
            <div className="mt-4">
              <Themes posts={posts} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

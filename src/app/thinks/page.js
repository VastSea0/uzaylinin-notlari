import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { CalendarIcon, ClockIcon } from 'lucide-react'

export default function thinks() {
  const postsDirectory = path.join(process.cwd(), 'thinks')
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return {
      slug: fileName.replace('.md', ''),
      title: data.title,
      date: new Date(data.date),
      excerpt: data.excerpt || ''
    }
  })

  const sortedPosts = posts.sort((a, b) => b.date - a.date)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-purple-300 mb-8">Düşünce Yazıları</h1>
      <p>
        Bu yazılarda da kendi düşüncelerimi ve hoşuma giden alıntıları paylaşacağım ancak bu yazılar daha küçük olacak bir cümle veya bir paragraf olabilir. 
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedPosts.map((post) => (
          <Link href={`/thinks/${post.slug}`} key={post.slug} className="block">
            <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-purple-300 mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <time dateTime={post.date.toISOString()}>
                    {post.date.toLocaleDateString('tr-TR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </time>
                  <ClockIcon className="w-4 h-4 ml-4 mr-2" />
                  <span>
                    {post.date.toLocaleTimeString('tr-TR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
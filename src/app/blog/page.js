import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Blog() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirectory)
  
  const posts = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      slug: fileName.replace('.md', ''),
      title: data.title,
      date: new Date(data.date) // Tarihleri Date nesnesine dönüştür
    }
  })

  // Tarihleri en yeni olanı en üstte olacak şekilde sıralama
  const sortedPosts = posts.sort((a, b) => b.date - a.date)

  return (
    <ul className="space-y-4">
      {sortedPosts.map((post) => (
        <li key={post.slug} className="bg-gray-700 shadow-md rounded-lg overflow-hidden">
          <Link href={`/blog/${post.slug}`}>
            <div className="px-4 py-5 hover:bg-gray-600 transition duration-150 ease-in-out">
              <h3 className="text-lg leading-6 font-medium text-purple-300">
                {post.title} | {post.date.toLocaleDateString('tr-TR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })} {post.date.toLocaleTimeString('tr-TR', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

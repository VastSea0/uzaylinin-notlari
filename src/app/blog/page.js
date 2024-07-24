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
      date: data.date
    }
  })

  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.slug} className="bg-gray-700 shadow-md rounded-lg overflow-hidden">
          <Link href={`/blog/${post.slug}`}>
            <div className="px-4 py-5 hover:bg-gray-600 transition duration-150 ease-in-out">
              <h3 className="text-lg leading-6 font-medium text-purple-300">
                {post.title} | {post.date}
              </h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
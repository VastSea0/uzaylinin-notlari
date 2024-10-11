

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import rehypeReact from 'rehype-react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Github } from 'lucide-react'
import Card from '../../comps/card'
import Comments from '../../comps/Comments'

const components = {
  Card: Card,
};

export default function ThinksPost({ params }) {
  const { slug } = params
  const filePath = path.join(process.cwd(), 'thinks', `${slug}.md`);
 

  let fileContent;
  try {
    fileContent = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error(`File not found: ${filePath}`);
      fileContent = 'Dosya bulunamadı.';
    } else {
      throw err;
    }
  }
  const { data, content } = matter(fileContent)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg border-b border-purple-500 sticky top-0 z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ul className="flex items-center justify-between">
            <li>
              <Link href="/" className="flex items-center text-purple-300 hover:text-purple-100 transition duration-300">
                <ArrowLeft className="mr-2" size={20} />
                Geri Dön
              </Link>
            </li>
            <div className="flex space-x-6">
              <li><Link href="/" className="text-purple-300 hover:text-purple-100 transition duration-300">Anasayfa</Link></li>
              <li><Link href="/blog/helo" className="text-purple-300 hover:text-purple-100 transition duration-300">Hakkında</Link></li>
              <li><Link href="https://github.com/VastSea0" className="text-purple-300 hover:text-purple-100 transition duration-300">Github</Link></li>
            </div>
          </ul>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <article className="bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-purple-500 transition duration-300 hover:shadow-2xl">
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-purple-300">{data.title}</h1>
            <div className="flex items-center text-gray-400 mb-8">
              <Calendar size={18} className="mr-2" />
              <span className="mr-4">{new Date(data.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <Clock size={18} className="mr-2" />
              <span>{new Date(data.date).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <div className="prose prose-lg prose-invert prose-purple max-w-none">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw, [rehypeReact, { components }]]}
                remarkPlugins={[remarkGfm]}
                className="text-gray-200"
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </article>

        <Comments postId={slug} />
      </main>

      <footer className="bg-gray-800 bg-opacity-50 mt-12 py-6 border-t border-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300">&copy; {new Date().getFullYear()} Egehan. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'))
  return files.map(filename => ({
    slug: filename.replace('.md', '')
  }))
}
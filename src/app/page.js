import Link from 'next/link'
import { Github, Mail, Instagram } from 'lucide-react'
import Blog from './blog/page'
import Thinks from './thinks/page'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg border-b border-purple-500 sticky top-0 z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ul className="flex items-center justify-between">
            <li className="font-bold text-xl text-purple-300">Egehan</li>
            <div className="flex space-x-6">
              <li><Link href="/" className="text-purple-300 hover:text-purple-100 transition duration-300">Anasayfa</Link></li>
              <li><Link href="/blog/helo" className="text-purple-300 hover:text-purple-100 transition duration-300">Hakkında</Link></li>
              <li><Link href="https://github.com/VastSea0" className="text-purple-300 hover:text-purple-100 transition duration-300">Github</Link></li>
            </div>
          </ul>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
         
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            İnternet'in özgür vadilerine hoş geldiniz!
          </h1>
          <h2 className="text-4xl font-semibold mb-4">
            Ben <span className="text-purple-400">Egehan</span>
          </h2>
          <p className="text-2xl text-purple-200 mb-6 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "> Yazılım | Felsefe | Tarih | Müzik</p>
          
          
          <p className="text-lg text-gray-400">Özgür değilsin henüz, hala özgürlüğü <code className="text-purple-400" > a r ı y o r s u n </code>. </p>
          <p className="text-lg text-gray-400">Uykusuz ve aşırı uyanık kılmış arayışın seni</p>
    
    <div className="flex justify-center space-x-4">
            <a href="https://github.com/VastSea0" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
              <Github size={24} />
            </a>
            <a href="mailto:vastseaoffical0@outlook.com" className="text-gray-300 hover:text-white transition duration-300">
              <Mail size={24} />
            </a>
            <a href="https://instagram.com/crusttaceans" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-purple-500 transition duration-300 hover:shadow-2xl hover:border-pink-500">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Son Blog Yazıları</h3>
            <Blog />
            
          </div>
        </div>
        <br>

        </br>
        <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden border border-purple-500 transition duration-300 hover:shadow-2xl hover:border-pink-500">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Son Düşünce Yazıları</h3>
            <Thinks />
            
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 bg-opacity-50 mt-12 py-6 border-t border-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300">&copy; {new Date().getFullYear()} Egehan. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

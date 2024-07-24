import Link from 'next/link'
import Blog from './blog/page'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
       <header className="bg-gray-800 border-b border-purple-500">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-purple-300 hover:text-purple-100">Anasayfa</Link></li>
          <li><Link href="/blog/helo" className="text-purple-300 hover:text-purple-100">Hakkında</Link></li>
          <li><Link href=" https://github.com/VastSea0" className="text-purple-300 hover:text-purple-100">Github</Link></li>
        </ul>
      </nav>
    </header>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-purple-300">Herkese Merhaba 👋</h1>
          <h2 className="text-4xl font-semibold mb-2">Ben <span className="text-purple-400">Egehan</span></h2>
          <p className="text-2xl text-purple-200">Yazılım geliştricisi</p>
        </div>
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-purple-500">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Blog Yazıları</h2>
            <Blog />
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 mt-12 py-6 border-t border-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-300">&copy; 2024 Egehan. Tüm hakları saklıdır. </p>
        </div>
      </footer>
    </div>
  )
}
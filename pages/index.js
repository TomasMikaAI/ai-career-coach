import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 font-sans">
      <Head>
        <title>AI Career Coach</title>
      </Head>
      <main className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 max-w-3xl">
          Land your next job <span className="text-blue-600">10x faster</span> with AI
        </h1>
        <p className="text-lg sm:text-xl max-w-xl mb-8">
          Let AI upgrade your CV, write your cover letter, and prep you for interviews – in minutes.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-2xl shadow-lg transition">
          Get early access – it’s free
        </button>
      </main>
    </div>
  )
}

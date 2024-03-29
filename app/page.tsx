import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()

  let href = userId ? '/journal' : '/new-user'

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white p-5">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-5xl sm:text-6xl mb-4">
          Best AI Journal app, period.
        </h1>
        <p className="text-1xl sm:text-2xl text-white/60 mb-4">
          This is the best app for tracking our mood. All you have to do is be
          honest.
        </p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-5 py-3 rounded-lg text-lg sm:text-xl border-2 border-blue-600 hover:bg-blue-700 hover:border-dashed hover:border-2 hover:border-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

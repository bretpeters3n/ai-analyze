import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Journals', href: '/journal' },
  { name: 'History', href: '/history' },
]

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen grid-rows-[2fr_1fr_5fr_1fr] grid-cols-1 sm:grid-cols-[1fr_6fr] sm:grid-rows-[1fr_6fr_1fr] grid">
      <header className="h-[60px] border-b border-black/10 sm:col-span-2">
        <div className="h-full w-full px-4 flex items-center justify-between">
          <span className="text-3xl">
            AI.Analyze<span className="text-yellow-400">.me</span>
          </span>
          <UserButton />
        </div>
      </header>
      {/* <aside className="absolute w-[150px] top-[60px] left-0 h-full border-r border-black/10"> */}
      <aside className="border-black/10 border-b sm:border-r">
        {/* <div className="px-4 my-4">
          <span className="text-3xl">MOOD</span>
        </div> */}
        <div>
          <ul className="px-4 flex flex-row my-3 sm:flex-col justify-around sm:gap-2">
            {links.map((link) => (
              <li key={link.name} className="text-xl">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {/* <section className="ml-[150px] h-full"> */}
      <section className="">
        {/* <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-between">
            <span className="text-3xl">MOOD</span>
            <UserButton />
          </div>
        </header> */}
        <div className="h-full">{children}</div>
      </section>
      <footer className="sm:col-span-2 bg-white border-2 border-black/10">
        Temp Footer
      </footer>
    </div>
  )
}

export default DashboardLayout

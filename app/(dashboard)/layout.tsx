import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Journals', href: '/journal' },
  { name: 'History', href: '/history' },
]

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen relative">
      <header className="h-[60px] border-b border-black/10">
        <div className="h-full w-full px-4 flex items-center justify-between">
          <span className="text-3xl">
            AI.Analyze<span className="text-yellow-400">.me</span>
          </span>
          <UserButton />
        </div>
      </header>
      <aside className="absolute w-[150px] top-[60px] left-0 h-full border-r border-black/10">
        {/* <div className="px-4 my-4">
          <span className="text-3xl">MOOD</span>
        </div> */}
        <div>
          <ul className="px-4">
            {links.map((link) => (
              <li key={link.name} className="text-xl my-4">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="ml-[150px] h-full">
        {/* <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-between">
            <span className="text-3xl">MOOD</span>
            <UserButton />
          </div>
        </header> */}
        <div className="h-full">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout

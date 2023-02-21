import DarkMode from '@/components/mollecules/DarkMode'
import DrawerToggler from '@/components/mollecules/DrawerToggler'
import Nav from '@/components/mollecules/Nav'

import { twclsx } from '@/libs/twclsx'
import UnstyledLink from '@/components/atoms/UnstyledLink'
import { useRouter } from 'next/router'

const Header = () => {
  const { pathname } = useRouter()

  if (pathname === '/_error' || pathname === '/404') return null

  return (
    <header className={twclsx('fixed inset-0 h-20 shadow-md', 'bg-main-1 dark:bg-main-5 z-50')}>
      
      <div className={twclsx('h-2 w-full', 'bg-gradient-to-r', 'from-green-300 via-blue-500 to-purple-600')} />

      <section className={twclsx('layout max-w-7xl', 'flex items-center justify-between', 'h-full -mt-1.5')}>
        <div className='text-4xl md:text-2xl sm:text-2xl '><UnstyledLink href='/' sr='Krunal Shah Blog' >Krunal shah</UnstyledLink></div>
        <Nav />
        <DarkMode />
        <DrawerToggler />
        
      </section>
    </header>
  )
}

export default Header

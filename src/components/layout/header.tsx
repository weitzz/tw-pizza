import Link from 'next/link'
import CartButton from '../cart/cartButton'
import LoginButton from '../login/loginButton'
import { cookies } from 'next/headers'
import { Pizza } from "lucide-react"
import { Caveat_Brush } from 'next/font/google'

const caveatBrush = Caveat_Brush({ subsets: ['latin'], weight: '400' })

async function Header() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  return (
    <header className='container mx-auto flex my-4 p-5 items-center justify-between bg-secondary rounded-md'>
      <Link href="/" className={`${caveatBrush.className} flex items-center text-3xl font-bold`}><Pizza className="mr-2 text-red-600 hover:text-red-400" />TW-Pizzas</Link>
      <div className='flex gap-2'>
        <LoginButton initialState={token ? true : false} />
        <CartButton />
      </div>
    </header>
  )
}


export default Header
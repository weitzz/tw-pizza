import Link from 'next/link'
import CartButton from '../cart/cartButton'
import LoginButton from '../login/loginButton'
import { cookies } from 'next/headers'


async function Header() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  return (
    <header className='container mx-auto flex my-4 p-5 items-center justify-between bg-secondary rounded-md'>
      <Link href="/" className=' text-2xl font-bold'>TW-Pizzas</Link>
      <div className='flex gap-2'>
        <LoginButton initialState={token ? true : false} />
        <CartButton />
      </div>
    </header>
  )
}

export default Header
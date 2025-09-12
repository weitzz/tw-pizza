import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
      <header className='container mx-auto flex my-4 p-5 items-center justify-between bg-secondary rounded-md'>
          <Link href="/" className=' text-2xl font-bold'>Pizzaria-TW</Link>
          <div className='flex gap-2'>
              <Button variant='outline'>Login / Cadastro</Button>
              <Button>Carrinho</Button>
          </div>
    </header>
  )
}

export default Header
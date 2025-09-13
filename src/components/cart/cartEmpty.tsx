'use client'
import { Button } from '../ui/button'
import { useCartStore } from '@/stores/cartStore'

const CartEmpty = () => {
    const {setOpen} = useCartStore()
    return (
      <div className='my-10 text-center'>
      <p className='mb-4'>Carrinho vazio.</p>
      <Button onClick={()=> setOpen(false)}>Fechar</Button>
      </div >
  )
}

export default CartEmpty
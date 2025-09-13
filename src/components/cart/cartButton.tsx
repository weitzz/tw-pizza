'use client'
import { useCartStore } from '@/stores/cartStore'
import { Button } from '../ui/button'


const CartButton = () => {
   const cart = useCartStore()
  return (
    <Button onClick={() =>cart.setOpen(true)}>Carrinho <i className="ri-shopping-cart-2-line"></i></Button>
  )
}

export default CartButton
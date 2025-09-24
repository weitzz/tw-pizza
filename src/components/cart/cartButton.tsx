'use client'
import { useCartStore } from '@/stores/cartStore'
import { Button } from '../ui/button'
import { ShoppingCart } from "lucide-react"


const CartButton = () => {
  const cart = useCartStore()
  return (
    <Button onClick={() => cart.setOpen(true)} className="bg-orange-600 hover:bg-orange-500 cursor-pointer">Carrinho <ShoppingCart className="inline-block" /></Button>
  )
}

export default CartButton
'use client'

import { formatPrice } from "@/lib/utils"
import { useProducstStore } from "@/stores/productStore"
import { CartItem } from "@/types/cart-item"
import Image from "next/image"
import { Button } from "../ui/button"
import { useState } from "react"
import { useCartStore } from "@/stores/cartStore"
type Props = {
    data: CartItem
}

const CartProduct = ({ data }: Props) => {
    const [quantity,setQuantity] = useState(data.quantity)
    const cart = useCartStore()
    const products = useProducstStore()
    let product = products.products.find(item => item.id === data.productId)
    if (!product) return null
    
    const handleMinusClick = () => {
        if (quantity - 1 <= 0) {
            cart.removeItem(data.productId)
        } else {
            cart.addItem({ productId: data.productId, quantity: -1 })
            setQuantity(quantity -1)
            
        }
    }

    const handlePlusClick = () => {
        cart.addItem({ productId: data.productId, quantity: 1 })
        setQuantity(quantity +1)
    }
  return (
      <div className=" flex items-center gap-3">
          <div className="w-10">
              <Image src={product.image} alt={ product.name} width={100} height={100} className="w-full"/>
          </div>
          <div className="flex-1">
              <p>{product.name}</p>
              <span>{formatPrice(product.price)}</span>
          </div>
          <div className="flex items-center bg-secondary p-2 rounded-md">
              <Button size="sm" variant="ghost" onClick={ handleMinusClick} className="cursor-pointer"><i className="ri-subtract-line text-xl"></i></Button>
              <div className="mx-3">{ quantity}</div>
               <Button size="sm" variant="ghost" onClick={handlePlusClick} className="cursor-pointer"><i className="ri-add-line text-xl "></i></Button>
          </div>
      </div>
  )
}

export default CartProduct
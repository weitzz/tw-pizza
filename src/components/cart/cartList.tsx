'use client'

import { useCartStore } from "@/stores/cartStore"
import { useProducstStore } from "@/stores/productStore"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import CartProduct from "./cartProduct"
import { formatPrice } from "@/lib/utils"

const CartList = () => {
    const cart = useCartStore()
    const products = useProducstStore()
    const [subtotal, setSubtotal] = useState(0)
    const [shippingCost, setshippingCost] = useState(10)

    const calculateSubtotal = () => {
        let sub = 0
        for (let item of cart.items) {
            const prod = products.products.find(product => product.id === item.productId)
            if(prod) sub += item.quantity * parseFloat(prod.price.toString())
        }
        setSubtotal(sub)
    }
    useEffect(calculateSubtotal,[cart])


    return (
      <section>
            <div className="flex flex-col gap-3 my-5">
                {cart.items.map(item => (
                    <CartProduct key={ item.productId} data={item} />
                    ))}
                <div className="my-4 text-right">
                    <p>Sub-total: { formatPrice(subtotal)}</p>
                    <p>Frete:{ formatPrice(shippingCost)}</p>
                    <p>Total:{ formatPrice(subtotal+shippingCost)}</p>

                </div>
          
            </div>
            <Button>Finalizar compra</Button>
      
      </section>
  )
}

export default CartList
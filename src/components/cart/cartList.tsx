'use client'

import { useCartStore } from "@/stores/cartStore"
import { useProducstStore } from "@/stores/productStore"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import CartProduct from "./cartProduct"
import { formatPrice } from "@/lib/utils"
import { useAuthStore } from "@/stores/authStore"
import { apiWithAuth } from "@/lib/axios"


const CartList = () => {
    const auth = useAuthStore()
    const cart = useCartStore()
    const products = useProducstStore()
    const [subtotal, setSubtotal] = useState(0)
    const [shippingCost, setshippingCost] = useState(10)

    const calculateSubtotal = () => {
        let sub = 0
        for (let item of cart.items) {
            const prod = products.products.find(product => product.id === item.productId)
            if (prod) sub += item.quantity * parseFloat(prod.price.toString())
        }
        setSubtotal(sub)
    }
    useEffect(calculateSubtotal, [cart])

    const handleFinish = async () => {
        if (cart.items.length > 0) {
            const orderReq = await apiWithAuth.post('/order/new', {
                cart: cart.items
            })

            if (orderReq.status === 201) {
                window.location.href = orderReq.data.url
            }
        }
    }
    return (
        <>
            <div className="flex flex-col gap-3 my-5">
                {cart.items.map(item => (
                    <CartProduct key={item.productId} data={item} />
                ))}
                <div className="my-4 text-right">
                    <p>Sub-total: {formatPrice(subtotal)}</p>
                    <p>Frete:{formatPrice(shippingCost)}</p>
                    <p>Total:{formatPrice(subtotal + shippingCost)}</p>

                </div>

            </div>
            {auth.token &&
                <Button onClick={handleFinish} className="bg-green-700 hover:bg-green-900">Finalizar Compra</Button>
            }
            {!auth.token &&
                <Button onClick={() => auth.setOpen(true)}>Login / Cadastro</Button>
            }

        </>
    )
}

export default CartList
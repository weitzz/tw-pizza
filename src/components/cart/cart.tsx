'use client'
import { useCartStore } from "@/stores/cartStore"
import { Drawer, DrawerContent, DrawerTitle } from "../ui/drawer"
import { useEffect, useState } from "react"
import CartEmpty from "./cartEmpty"
import CartList from "./cartList"

const Cart = () => {
    const cart = useCartStore()
    const [open, setOpen] = useState(cart.open)
    useEffect(() => {
        setOpen(cart.open)
    },[cart])

  return (
      <Drawer direction="right" open={open} onOpenChange={open => cart.setOpen(open)}>
          <DrawerContent className="p-4">
              <DrawerTitle>Carrinho</DrawerTitle>
              {cart.items.length <= 0 && <CartEmpty />}
              {cart.items.length > 0 && <CartList/>}
          </DrawerContent>
    </Drawer>
  )
}

export default Cart
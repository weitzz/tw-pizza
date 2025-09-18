import { CartItem } from "@/types/cart-item";
import { create } from 'zustand'

type Store = {
    open: boolean
    items: CartItem[]
    setOpen: (open: boolean) => void
    addItem: (item: CartItem) => void
    removeItem: (productId: number) => void
}

export const useCartStore = create<Store>((set) => ({
    open: false,
    items: [],
    setOpen: (open) => set(state => ({ ...state, open })),
    addItem: (item) => set(state => {
        let cloneItems = [...state.items]
        const existing = state.items.find(i => i.productId === item.productId)
        if (existing) {
            for (let key in cloneItems) {
                if (cloneItems[key].productId === item.productId) {
                    cloneItems[key].quantity += item.quantity
                }
            }
        } else {
            cloneItems.push({ productId: item.productId, quantity: item.quantity })
        }
        return { ...state, items: cloneItems }
    }),
    removeItem: (productId) => set(state => ({
        ...state,
        items: state.items.filter(item => item.productId !== productId)
    }))
}))
import { CartItem } from "@/types/cart-item"
import { prisma } from "@/lib/prisma"
export const createNewOrder = async (userId: number, cart: CartItem[]) => {
    const orderProducts = []
    let subtotal = 0

    for (let item of cart) {
        const product = await prisma.product.findUnique({
            where: { id: item.productId }
        })

        if (product) {
            orderProducts.push({
                productId: product.id,
                price: parseFloat(product.price.toString()),
                quantity: item.quantity
            })
            subtotal += item.quantity * parseFloat(product.price.toString())
        }

    }


    const newOrder = await prisma.order.create({
        data: {
            userId, subtotal, orderProducts: {
                createMany: {
                    data: orderProducts
                }
            }
        },

    })

    return newOrder

}
'use client'

import { Product } from "@/generated/prisma";
import Image from "next/image";
import { Button } from "../ui/button";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";

type Props = {
    data: Product;
}



const PizzaItem = ({ data }: Props) => {
    const cart = useCartStore()

    const handleAddToCart = () => {
        cart.addItem({
            productId: data.id,
            quantity: 1
        })
        cart.setOpen(true)
    }


    return (
        <div className="text-sm bg-secondary p-4 rounded-md">
            <Image src={data.image} alt={data.name} width={200} height={200} className="w-full mb-3" />
            <h3 className="font-bold text-lg">{data.name}</h3>
            <span className="font-semibold">{formatPrice(data.price)}</span>
            <p className=" mb-3">{data.ingredients}</p>
            <div className="text-center">
                <Button onClick={() => handleAddToCart()} className="bg-orange-600 hover:bg-orange-500 cursor-pointer">
                    Adicionar ao Carrinho</Button>

            </div>
        </div>
    )
}

export default PizzaItem
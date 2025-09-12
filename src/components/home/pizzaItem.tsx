'use client'

import { Product } from "@/generated/prisma";
import Image from "next/image";
import { Button } from "../ui/button";
import { formatPrice } from "@/lib/utils";

type Props = {
    data: Product;
}

const handleAddToCart = (product: Product) => {
  // Lógica para adicionar o produto ao carrinho
  console.log(`Adicionar ${product.name} ao carrinho`);
}

const PizzaItem = ({ data }: Props) => {
  return (
      <div className="text-sm bg-secondary p-4 rounded-md">
          <Image src={data.image} alt={data.name} width={200} height={200} className="w-full mb-3" />
          <h3 className="font-bold text-lg">{data.name}</h3>
            <span className="font-semibold">{formatPrice(data.price)}</span>
          <p className="truncate mb-3">{data.ingredients}</p>
          <div className="text-center">
          <Button onClick={() => handleAddToCart(data)}>
              Adicionar ao Carrinho</Button>
              
          </div>
    </div>
  )
}

export default PizzaItem
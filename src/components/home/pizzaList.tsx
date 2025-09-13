'use client'

import { Product } from "@/generated/prisma"
import PizzaItem from "./pizzaItem"
import { useProducstStore } from "@/stores/productStore"
import { useEffect } from "react"

type PizzaProps = {
  pizzas: Product[]
}
const PizzaList = ({ pizzas }: PizzaProps) => {
    const products = useProducstStore()
    useEffect(()=> products.setProducts(pizzas),[])
  return (
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {pizzas.map((pizza: Product) => (
          <PizzaItem
                key={pizza.id}
                data={pizza}
              />
        ))}
      </section>
  )
}

export default PizzaList
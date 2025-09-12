'use client'

import { Product } from "@/generated/prisma"
import PizzaItem from "./pizzaItem"

type PizzaProps = {
  pizzas: Product[]
}
const PizzaList = ({ pizzas }: PizzaProps) => {
  return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {pizzas.map((pizza: Product) => (
          <PizzaItem
                key={pizza.id}
                data={pizza}
              />
        ))}
      </div>
  )
}

export default PizzaList
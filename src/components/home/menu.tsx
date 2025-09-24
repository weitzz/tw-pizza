import React from 'react'
import SearchInput from '../search/searchInput'
import { api } from '@/lib/axios'
import PizzaList from './pizzaList'


const Menu = async () => {
    const pizzaRequest = await api.get('/pizzas');
    const pizzas = pizzaRequest.data ?? [];
    return (
        <>
            <section className="container mx-auto px-4 py-10 text-center">
                <SearchInput />
                <h1 className="text-4xl text-center mb-4 mt-4 font-caveat">Cardápio</h1>
                <p className="text-gray-600 mb-6">Escolha sua pizza favorita e faça seu pedido!</p>
            </section>
            <PizzaList pizzas={pizzas} />
        </>
    )
}

export default Menu
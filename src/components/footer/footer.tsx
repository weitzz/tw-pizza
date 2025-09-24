import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-secondary text-primary py-4">
            <div className="container mx-auto text-center font-semibold">
                &copy; {new Date().getFullYear()} TW-Pizzas. Todos os direitos reservados.
            </div>
        </footer>
    )
}

export default Footer
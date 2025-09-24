import Menu from "@/components/home/menu";
import PizzaList from "@/components/home/pizzaList";
import Header from "@/components/layout/header";
import { api } from "@/lib/axios";
import Image from "next/image";

export default async function Home() {
  const pizzaRequest = await api.get('/pizzas');
  const pizzas = pizzaRequest.data ?? [];
  return (
    <main>
      <section className="container mx-auto mb-10 ">
        <Header />
        <section className=" py-10 flex flex-col items-center justify-center">
          <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-4 font-caveat">Bem-vindo à TW-Pizzas!</h1>
            <p className="text-lg text-center mb-8">A melhor pizzaria da cidade, agora ao seu alcance.</p>
          </div>
          <Image src="/pizza-hero.png" alt="Pizza" width={600} height={400} />
        </section>
        <Menu />
        {/* <PizzaList pizzas={pizzas} /> */}
      </section>
      <footer className="bg-secondary text-primary py-4">
        <div className="container mx-auto text-center font-semibold">
          &copy; {new Date().getFullYear()} TW-Pizzas. Todos os direitos reservados.
        </div>
      </footer>
    </main>

  );
}

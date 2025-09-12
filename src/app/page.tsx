import PizzaList from "@/components/home/pizza-list";
import Header from "@/components/layout/header";
import api from "@/lib/axios";

export default async function Home() {
  const pizzaRequest = await api.get('/pizzas');
  const pizzas = pizzaRequest.data ?? [];
  return (
    <div>
      <Header />
      <main className="container mx-auto mb-10">
        <PizzaList pizzas={pizzas} />
      </main>
    </div>
  );
}

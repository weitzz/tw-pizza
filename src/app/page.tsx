import Footer from "@/components/footer/footer";
import Menu from "@/components/home/menu";
import Header from "@/components/layout/header";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <section className="container mx-auto mb-10">
        <Header />
        <section className=" py-10 flex flex-col items-center justify-center">
          <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-4 font-caveat">Bem-vindo à TW-Pizzas!</h1>
            <p className="text-lg text-center mb-8">A melhor pizzaria da cidade, agora ao seu alcance.</p>
          </div>
          <Image src="/pizza-hero.png" alt="Pizza" width={600} height={400} />
        </section>
        <Menu />
      </section>
      <Footer />
    </main>

  );
}

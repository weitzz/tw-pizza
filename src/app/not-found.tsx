import Link from "next/link";

export default function NotFound() {
    return (
        <main className='container mx-auto  text-center'>
            <h1 className="text-2xl">404</h1>
            <h3 className="text-xl">Página não encontrada </h3>
            <Link href="/" className="text-2xl">Voltar para a home</Link>

        </main>
    );
}

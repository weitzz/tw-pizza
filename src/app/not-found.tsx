import Link from "next/link";

export default function NotFound() {
    return (
        <main className='h-screen w-full flex flex-col justify-center items-center gap-4'>
            <h1 className="text-4xl font-bold font-caveat">404</h1>
            <h2 className="text-2xl font-caveat">Página não encontrada </h2>
            <Link href="/" className="text-2xl font-caveat">Voltar para a home</Link>
        </main>
    );
}

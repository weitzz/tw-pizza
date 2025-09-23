import Link from "next/link";

export default function NotFound() {
    return (
        <div className='text-center mx-auto container'>
            <h1 style={{ fontSize: "3rem" }}>404</h1>
            <p>Página não encontrada </p>
            <Link href="/" className="text-2xl">Voltar para a home</Link>

        </div>
    );
}

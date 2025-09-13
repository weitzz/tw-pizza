import { createUser, createUserToken, hasEmail } from "@/services/authService";
import { error } from "console";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const { name, email, password } = await request.json()
    if (!name || !email || !password) return NextResponse.json({ error: 'Campos incompletos' })


    const has = await hasEmail(email)
    if (has) return NextResponse.json({ error: "Email já existe" })

    const newUser = await createUser(name, email, password)
    if (!newUser) return NextResponse.json({ error: "Erro ao criar usuário" })
    const token = await createUserToken(newUser.id)

    return NextResponse.json({ user: newUser, token }, { status: 201 })
}
'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useAuthStore } from '@/stores/authStore'
type Props = {
    initialState: boolean
}
const LoginButton = ({ initialState }: Props) => {
    const auth = useAuthStore()
    const [authState, setAuthState] = useState<boolean>(initialState)

    useEffect(() => {
        setAuthState(auth.token ? true : false)
    }, [auth])

    const handleLogout = () => {
        auth.setToken(null)
    }
    if (authState) {
        return (
            <>
                <Link href='/pedidos'>
                    <Button>Meus Pedidos</Button>
                </Link>
                <Button onClick={handleLogout}>Sair</Button>
            </>
        )
    }
    return (
        <Button onClick={() => auth.setOpen(true)}>Login / Cadastro</Button>
    )
}

export default LoginButton
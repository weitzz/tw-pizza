'use client'

import { useAuthStore } from "@/stores/authStore"
import { useState } from "react"
import { registerSchema } from '@/lib/validations'
type Props = {
    email: string

}

export const LoginSignup = (email: Props) => {
    const auth = useAuthStore()
    const [errors, setErrors] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState(email)
    const [passwordField, setPasswordField] = useState('')
    const [passwordConfirmField, setPasswordConfirmField] = useState('')
    return (
        <div>LoginSignup</div>
    )
}

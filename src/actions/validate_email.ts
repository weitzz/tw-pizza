"use server"

import { hasEmail } from "@/services/authService"
import { validateEmailSchema } from "@/lib/validations"

type ValidationState = {
    success: boolean | null
    errors: Record<string, string[]>
    exists?: boolean
    email?: string
}

export async function validateEmailAction(prevState: ValidationState,
    formData: FormData): Promise<ValidationState> {
    const email = formData.get("email")

    // validação com Zod
    const parsed = validateEmailSchema.safeParse({ email })
    if (!parsed.success) {
        return {
            success: false,
            errors: parsed.error.flatten().fieldErrors,
        }
    }

    const exists = await hasEmail(parsed.data.email)

    return {
        success: true,
        exists,
        errors: {},
        email: parsed.data.email,
    }
}

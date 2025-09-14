import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, "Nome muito curto"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "A senha precisa de pelo menos 6 caracteres"),
    confirmPassword: z.string().min(6, "A senha precisa de pelo menos 6 caracteres")
});

export const validateEmailSchema = z.object({
    email: z.string().email({ message: "Email inválido" })
})



export const loginSchema = z.object({
    name: z.string().min(3, "Campo obrigatório"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "Campo obrigatório"),
    confirmPassword: z.string().min(6, "Campo obrigatório")
});


export type RegisterSchema = z.infer<typeof registerSchema>;


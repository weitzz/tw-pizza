import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { headers } from 'next/headers'
import { v4 } from 'uuid'
import { tr } from 'zod/v4/locales'

export const hasEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: { email }
    })
    return user ? true : false
}

export const validateAuth = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { email }
    })
    if (!user) return false
    if (!bcrypt.compareSync(password, user.password)) return false

    return {
        id: user.id, name: user.name, email: user.name
    }
}

export const createUser = async (name: string, email: string, password: string) => {
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email: email.toLowerCase(),
                password: bcrypt.hashSync(password, 10)
            }

        })
        return {
            id: user.id, name: user.name, email: user.name
        }
    } catch (error) {
        return null
    }
}

export const createUserToken = async (userId: number) => {
    const token = v4();

    await prisma.user.update({
        where: { id: userId },
        data: { token }
    })
    return token;
}


export const getLoggedUserFromHeader = async () => {
    const headersList = await headers()
    const authorization = headersList.get('authorization')?.split(' ')
    if (!authorization) return null
    if (authorization[0] !== 'Token') return null
    if (!authorization[1]) return null
    const token = authorization[1]
    const user = await prisma.user.findFirst({
        where: { token },
        select: {
            id: true,
            name: true,
            email: true
        }
    })

    return user

}
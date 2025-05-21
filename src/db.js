// Importando uma instância do Prisma 
// Versões anteriores de 7.0 não é necessário o output no schema.prisma, usa-se '@prisma/client'
// A partir da 7.0, é obrigatório o uso do output, usa-se 'path do output/index.js'.
import { PrismaClient } from '@prisma/client' 
export const prisma = new PrismaClient();

async function getUser() {
    const user = await prisma.user.findMany()
    console.log(user)
}

getUser()
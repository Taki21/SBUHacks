import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handle(req, res) {
    if(req.method !== 'GET') {
        return res.status(405).json({ message: 'Unallowed Method' })
    }

    let o = req.query.owner

    const keyData = await prisma.keys.findMany({
        where: {
            owner: {
                contains: o
            }
        }
    })

    res.json(keyData)
}
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handle(req, res) {
    if(req.method !== 'POST') {
        return res.status(405).json({ message: 'Unallowed Method' })
    }

    let o = req.query.owner
    let k = req.query.k

    const keyData = await prisma.keys.create({
        data: {
            owner: o,
            key: k
        }
    })

    res.json(keyData)
}
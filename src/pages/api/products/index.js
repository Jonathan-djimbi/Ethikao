import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    res.status(200).json(products);
  } else {
    res.status(405).end(); // Méthode non autorisée
  }
}

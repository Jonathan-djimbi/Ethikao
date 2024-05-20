import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    });
    res.json(product);
  } else if (req.method === 'PUT') {
    const { name, description, price, imageUrl, categoryId } = req.body;
    const product = await prisma.product.update({
      where: { id: Number(id) },
      data: { name, description, price, imageUrl, categoryId },
    });
    res.json(product);
  } else if (req.method === 'DELETE') {
    await prisma.product.delete({
      where: { id: Number(id) },
    });
    res.status(204).end();
  } else {
    res.status(405).end();
  }
}

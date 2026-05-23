import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ShoppingListService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, data: { name: string; metaGasto?: number }) {
    return this.prisma.shoppingList.create({
      data: {
        name: data.name,
        metaGasto: data.metaGasto,
        userId,
      },
      include: {
        products: true,
        categories: true,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.shoppingList.findMany({
      where: { userId },
      include: {
        products: true,
        categories: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string, userId: string) {
    return this.prisma.shoppingList.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        products: true,
        categories: true,
      },
    });
  }

  async update(
    id: string,
    userId: string,
    data: { name?: string; metaGasto?: number; isFinished?: boolean },
  ) {
    return this.prisma.shoppingList.updateMany({
      where: {
        id,
        userId,
      },
      data: {
        ...data,
        finishedAt: data.isFinished ? new Date() : null,
      },
    });
  }

  async delete(id: string, userId: string) {
    return this.prisma.shoppingList.deleteMany({
      where: {
        id,
        userId,
      },
    });
  }
}

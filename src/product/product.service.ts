import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(
    shoppingListId: string,
    userId: string,
    data: {
      name: string;
      price: number;
      quantity?: number;
      categoryId?: string;
      createdByAI?: boolean;
    },
  ) {
    // Verify that the shopping list belongs to the user
    await this.prisma.shoppingList.findFirstOrThrow({
      where: {
        id: shoppingListId,
        userId,
      },
    });

    // If categoryId is provided, verify it belongs to the same shopping list
    if (data.categoryId) {
      await this.prisma.category.findFirstOrThrow({
        where: {
          id: data.categoryId,
          shoppingListId,
        },
      });
    }

    return this.prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        categoryId: data.categoryId,
        createdByAI: data.createdByAI || false,
        shoppingListId,
      },
    });
  }

  async findAll(shoppingListId: string, userId: string) {
    // Verify that the shopping list belongs to the user
    await this.prisma.shoppingList.findFirstOrThrow({
      where: {
        id: shoppingListId,
        userId,
      },
    });

    return this.prisma.product.findMany({
      where: { shoppingListId },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  async findOne(id: string, shoppingListId: string, userId: string) {
    // Verify that the shopping list belongs to the user
    await this.prisma.shoppingList.findFirstOrThrow({
      where: {
        id: shoppingListId,
        userId,
      },
    });

    return this.prisma.product.findFirst({
      where: {
        id,
        shoppingListId,
      },
      include: {
        category: true,
      },
    });
  }

  async update(
    id: string,
    shoppingListId: string,
    userId: string,
    data: {
      name?: string;
      price?: number;
      quantity?: number;
      categoryId?: string;
      purchased?: boolean;
    },
  ) {
    // Verify that the shopping list belongs to the user
    await this.prisma.shoppingList.findFirstOrThrow({
      where: {
        id: shoppingListId,
        userId,
      },
    });

    // Verify the product belongs to this shopping list
    await this.prisma.product.findFirstOrThrow({
      where: {
        id,
        shoppingListId,
      },
    });

    // If categoryId is provided, verify it belongs to the same shopping list
    if (data.categoryId) {
      await this.prisma.category.findFirstOrThrow({
        where: {
          id: data.categoryId,
          shoppingListId,
        },
      });
    }

    return this.prisma.product.update({
      where: { id },
      data,
      include: {
        category: true,
      },
    });
  }

  async delete(id: string, shoppingListId: string, userId: string) {
    // Verify that the shopping list belongs to the user
    await this.prisma.shoppingList.findFirstOrThrow({
      where: {
        id: shoppingListId,
        userId,
      },
    });

    return this.prisma.product.deleteMany({
      where: {
        id,
        shoppingListId,
      },
    });
  }
}

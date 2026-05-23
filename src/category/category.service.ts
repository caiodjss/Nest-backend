import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(
    shoppingListId: string,
    userId: string,
    data: { name: string },
  ) {
    // Verify that the shopping list belongs to the user
    await this.prisma.shoppingList.findFirstOrThrow({
      where: {
        id: shoppingListId,
        userId,
      },
    });

    return this.prisma.category.create({
      data: {
        name: data.name,
        shoppingListId,
      },
      include: {
        products: true,
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

    return this.prisma.category.findMany({
      where: { shoppingListId },
      include: {
        products: true,
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

    return this.prisma.category.findFirst({
      where: {
        id,
        shoppingListId,
      },
      include: {
        products: true,
      },
    });
  }

  async update(
    id: string,
    shoppingListId: string,
    userId: string,
    data: { name?: string },
  ) {
    // Verify that the shopping list belongs to the user
    await this.prisma.shoppingList.findFirstOrThrow({
      where: {
        id: shoppingListId,
        userId,
      },
    });

    return this.prisma.category.updateMany({
      where: {
        id,
        shoppingListId,
      },
      data,
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

    return this.prisma.category.deleteMany({
      where: {
        id,
        shoppingListId,
      },
    });
  }
}

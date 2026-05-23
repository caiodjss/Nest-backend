import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { ProductService } from './product.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';

@Controller('shopping-list/:shoppingListId/products')
@UseGuards(JwtAuthGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(
    @Param('shoppingListId') shoppingListId: string,
    @GetUser() user: { id: string },
    @Body()
    body: {
      name: string;
      price: number;
      quantity?: number;
      categoryId?: string;
      createdByAI?: boolean;
    },
  ) {
    return this.productService.create(shoppingListId, user.id, body);
  }

  @Get()
  async findAll(
    @Param('shoppingListId') shoppingListId: string,
    @GetUser() user: { id: string },
  ) {
    return this.productService.findAll(shoppingListId, user.id);
  }

  @Get(':id')
  async findOne(
    @Param('shoppingListId') shoppingListId: string,
    @Param('id') id: string,
    @GetUser() user: { id: string },
  ) {
    return this.productService.findOne(id, shoppingListId, user.id);
  }

  @Put(':id')
  async update(
    @Param('shoppingListId') shoppingListId: string,
    @Param('id') id: string,
    @GetUser() user: { id: string },
    @Body()
    body: {
      name?: string;
      price?: number;
      quantity?: number;
      categoryId?: string;
      purchased?: boolean;
    },
  ) {
    return this.productService.update(id, shoppingListId, user.id, body);
  }

  @Delete(':id')
  async delete(
    @Param('shoppingListId') shoppingListId: string,
    @Param('id') id: string,
    @GetUser() user: { id: string },
  ) {
    return this.productService.delete(id, shoppingListId, user.id);
  }
}

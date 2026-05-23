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

import { CategoryService } from './category.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';

@Controller('shopping-list/:shoppingListId/categories')
@UseGuards(JwtAuthGuard)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(
    @Param('shoppingListId') shoppingListId: string,
    @GetUser() user: { id: string },
    @Body() body: { name: string },
  ) {
    return this.categoryService.create(shoppingListId, user.id, body);
  }

  @Get()
  async findAll(
    @Param('shoppingListId') shoppingListId: string,
    @GetUser() user: { id: string },
  ) {
    return this.categoryService.findAll(shoppingListId, user.id);
  }

  @Get(':id')
  async findOne(
    @Param('shoppingListId') shoppingListId: string,
    @Param('id') id: string,
    @GetUser() user: { id: string },
  ) {
    return this.categoryService.findOne(id, shoppingListId, user.id);
  }

  @Put(':id')
  async update(
    @Param('shoppingListId') shoppingListId: string,
    @Param('id') id: string,
    @GetUser() user: { id: string },
    @Body() body: { name?: string },
  ) {
    return this.categoryService.update(id, shoppingListId, user.id, body);
  }

  @Delete(':id')
  async delete(
    @Param('shoppingListId') shoppingListId: string,
    @Param('id') id: string,
    @GetUser() user: { id: string },
  ) {
    return this.categoryService.delete(id, shoppingListId, user.id);
  }
}

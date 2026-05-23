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

import { ShoppingListService } from './shopping-list.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';

@Controller('shopping-list')
@UseGuards(JwtAuthGuard)
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Post()
  async create(
    @GetUser() user: { id: string },
    @Body() body: { name: string; metaGasto?: number },
  ) {
    return this.shoppingListService.create(user.id, body);
  }

  @Get()
  async findAll(@GetUser() user: { id: string }) {
    return this.shoppingListService.findAll(user.id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @GetUser() user: { id: string }) {
    return this.shoppingListService.findOne(id, user.id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @GetUser() user: { id: string },
    @Body() body: { name?: string; metaGasto?: number; isFinished?: boolean },
  ) {
    return this.shoppingListService.update(id, user.id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @GetUser() user: { id: string }) {
    return this.shoppingListService.delete(id, user.id);
  }
}

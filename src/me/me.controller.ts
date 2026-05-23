import { Controller, Get, UseGuards } from '@nestjs/common';

import { MeService } from './me.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

import { GetUser } from '../auth/decorators/get-user.decorator';

@Controller('me')
export class MeController {
  constructor(private readonly meService: MeService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getMe(@GetUser() user: { id: string }) {
    return this.meService.getProfile(user.id);
  }
}

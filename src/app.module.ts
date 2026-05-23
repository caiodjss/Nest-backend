import 'dotenv/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { MeController } from './me/me.controller';
import { MeService } from './me/me.service';
import { MeModule } from './me/me.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    PrismaModule,

    AuthModule,

    ShoppingListModule,

    MeModule,

    CategoryModule,

    ProductModule,
  ],
  controllers: [AppController, MeController],
  providers: [AppService, MeService],
})
export class AppModule {}

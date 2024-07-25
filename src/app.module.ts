import { Module } from '@nestjs/common';
import { ItemsController } from './items/items.controller';
import { CartController } from './cart/cart.controller';
import { ItemsService } from './items/items.service';
import { CartService } from './cart/cart.service';


@Module({
  imports: [],
  controllers: [ItemsController, CartController],
  providers: [ItemsService, CartService],
})
export class AppModule {}

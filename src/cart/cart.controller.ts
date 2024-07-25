import { Controller, Get, Post } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService){}

    @Get()
    fetchCart(){
        return this.cartService.fetchCart()
    }

    @Post()
    addItem(){
        return this.cartService.addItems()
    }
}

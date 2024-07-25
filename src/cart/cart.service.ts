import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {

    fetchCart(){
        //logic
        return 'These are the cart items'
    }

    addItems(){
        //logic
        return 'The item has been added to cart'
    }
}

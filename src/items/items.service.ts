import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {

    fetchItems(){
        return "These are the items available"
    }
  
}

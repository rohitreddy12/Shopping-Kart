import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('/')
export class ItemsController {
    constructor(private itemsService: ItemsService){}

    @Get()
    fetchItems(){
        return this.itemsService.fetchItems()
    }
}

import {Controller, Get} from "@nestjs/common";
import {OrderService} from "../services";

@Controller('orders')
export class OrderController {

    constructor(private readonly orderService: OrderService) {}

    @Get()
    getOrder(): any {
        return this.orderService.getInvoices();
    }
}

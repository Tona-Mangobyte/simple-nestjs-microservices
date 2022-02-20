import {Controller} from "@nestjs/common";
import {MessagePattern} from "@nestjs/microservices";
import {OrderService} from "../services";
import {RequestPage} from "../common";

@Controller()
export class OrderController {

    constructor(private readonly orderService: OrderService) {
    }

    @MessagePattern({ cmd: 'get.invoices' })
    sum(data: RequestPage): any {
        return this.orderService.getInvoices(data);
    }
}

import {ORDER_SERVICE} from "../common/service.constants";
import {Inject, Injectable} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";

@Injectable()
export class OrderService {
    constructor(
        @Inject(ORDER_SERVICE) private readonly orderServiceClient: ClientProxy,
    ) {}

    getInvoices() {
        const pattern = { cmd: 'get.invoices' };
        const data = { page: 1, limit: 30 };
        return this.orderServiceClient.send<number>(pattern, data);
    }
}

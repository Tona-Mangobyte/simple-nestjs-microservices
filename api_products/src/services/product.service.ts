import { PRODUCT_SERVICE} from "../common/service.constants";
import {Inject, Injectable} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";

@Injectable()
export class ProductService {
    constructor(
        @Inject(PRODUCT_SERVICE) private readonly productServiceClient: ClientProxy,
    ) {}

    getProducts() {
        const pattern = { cmd: 'get.products' };
        const data = { page: 1, limit: 30 };
        return this.productServiceClient.send<number>(pattern, data);
    }
}

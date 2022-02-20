import {Controller} from "@nestjs/common";
import {MessagePattern} from "@nestjs/microservices";
import {ProductService} from "../services";
import {RequestPage} from "../common";

@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @MessagePattern({ cmd: 'get.products' })
    getProducts(requestPage: RequestPage): any {
        return this.productService.getProducts(requestPage);
    }
}

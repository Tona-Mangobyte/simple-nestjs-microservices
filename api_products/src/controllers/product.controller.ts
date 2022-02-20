import {Controller, Get} from "@nestjs/common";
import {ProductService} from "../services";

@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService) {}

    @Get()
    getProducts(): any {
        return this.productService.getProducts();
    }
}

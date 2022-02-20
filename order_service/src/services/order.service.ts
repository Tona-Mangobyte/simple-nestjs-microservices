import {RequestPage} from "../common";
import {Injectable} from "@nestjs/common";

@Injectable()
export class OrderService {

    getInvoices(requestPage: RequestPage): any {
        return {
            pagination: { ...requestPage },
            data: [
                {
                    id: 1001,
                    total: 144,
                    items: [
                        {
                            id: 1,
                            name: 'Cocacola Can',
                            qty: 96,
                            price: 0.5,
                            amount: 48
                        },
                        {
                            id: 2,
                            name: 'Pepsi Can',
                            qty: 96,
                            price: 0.5,
                            amount: 48
                        },
                        {
                            id: 3,
                            name: 'Fanta Can',
                            qty: 96,
                            price: 0.5,
                            amount: 48
                        }
                    ]
                }
            ]
        }
    }
}

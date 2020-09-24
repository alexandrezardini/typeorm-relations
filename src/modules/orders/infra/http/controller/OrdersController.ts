import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';
import FindOrderService from '@modules/orders/services/FindOrderService';

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    return response.json({
      id,
      created_at: '2020-05-11T07:09:48.767Z',
      updated_at: '2020-05-11T07:09:48.767Z',
      customer: {
        id: 'e26f0f2a-3ac5-4c21-bd22-671119adf4e9',
        name: 'Rocketseat',
        email: 'oi@rocketseat.com.br',
        created_at: '2020-05-11T06:20:28.729Z',
        updated_at: '2020-05-11T06:20:28.729Z',
      },
      order_products: [
        {
          product_id: 'ce0516f3-63ae-4048-9a8a-8b6662281efe',
          price: '1400.00',
          quantity: 5,
          order_id: '5cbc4aa2-b3dc-43f9-b121-44c1e416fa92',
          id: '265b6cbd-3ab9-421c-b358-c2e2b5b3b542',
          created_at: '2020-05-11T07:09:48.767Z',
          updated_at: '2020-05-11T07:09:48.767Z',
        },
        {
          product_id: '82612f2b-3f31-40c6-803d-c2a95ef35e7c',
          price: '500.00',
          quantity: 7,
          order_id: '5cbc4aa2-b3dc-43f9-b121-44c1e416fa92',
          id: 'ae37bcd6-7be7-47b9-b277-afee35aab4e4',
          created_at: '2020-05-11T07:09:48.767Z',
          updated_at: '2020-05-11T07:09:48.767Z',
        },
      ],
    });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { customer_id, products } = request.body;

    return response.json({ customer_id, products });
  }
}

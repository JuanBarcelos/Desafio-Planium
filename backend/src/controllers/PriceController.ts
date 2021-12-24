import { Request, Response } from "express";
import { CreatePrice, GetAllPrice, DeletePrice, UpdatePrice } from "../service/PriceServices";

export class CreatePriceController {
    async handle(request: Request, response: Response) {
        const { minimoVidas,
            faixa1,
            faixa2,
            faixa3,
            codigo,
            plans_id} = request.body;

        const service = new CreatePrice();

        const result = await service.execute({ minimoVidas,
            faixa1,
            faixa2,
            faixa3,
            codigo,
            plans_id });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result);

    }
}

export class DeletePriceController{
    async handle(request: Request, response: Response){
        const{id} = request.params;

        const service = new DeletePrice();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}

export class GetAllPriceController{
    async handle(request: Request, response: Response){
        const service = new GetAllPrice();

        const price = await service.execute();

        return response.json(price);
    }
}

export class UpdatePriceController{
    async handle(request: Request, response: Response){
        const {id} = request.params;
        const{minimoVidas,
            faixa1,
            faixa2,
            faixa3,
            codigo,
            plans_id} = request.body;

        const service = new UpdatePrice();

        const result = await service.execute({id, minimoVidas,
            faixa1,
            faixa2,
            faixa3,
            codigo,
            plans_id});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}
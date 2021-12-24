import { Request, Response } from "express";
import { CreateHolderPlan, DeleteHolderPlan, GetAllHolderPlan, UpdateHolderPlan } from "../service/HolderPlanServices";


export class CreateHolderPlanController {
    async handle(request: Request, response: Response) {
        const { name,age,totalBeneficiary,plans_id} = request.body;

        const service = new CreateHolderPlan();

        const result = await service.execute({ name,age,totalBeneficiary,plans_id });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result);
    }
}

export class DeleteHolderPlanController{
    async handle(request: Request, response: Response){
        const{id} = request.params;

        const service = new DeleteHolderPlan();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}

export class GetAllHolderPlanController{
    async handle(request: Request, response: Response){
        const service = new GetAllHolderPlan();

        const price = await service.execute();

        return response.json(price);
    }
}

export class UpdateHolderPlanController{
    async handle(request: Request, response: Response){
        const {id} = request.params;
        const{name,age,totalBeneficiary,plans_id} = request.body;

        const service = new UpdateHolderPlan();

        const result = await service.execute({id, name,age,totalBeneficiary,plans_id});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}
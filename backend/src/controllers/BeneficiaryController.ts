import { Request, Response } from "express";
import { CreateBeneficiary, GetAllBeneficiary, DeleteBeneficiary, UpdateBeneficiary } from "../service/BeneficiaryServices";

export class CreateBeneficiaryController {
    async handle(request: Request, response: Response) {
        const { name, age, holderplan_id } = request.body;

        const service = new CreateBeneficiary();

        const result = await service.execute({ name, age, holderplan_id });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result);

    }
}

export class DeleteBeneficiaryController{
    async handle(request: Request, response: Response){
        const{id} = request.params;

        const service = new DeleteBeneficiary();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}

export class GetAllBeneficiaryController{
    async handle(request: Request, response: Response){
        const service = new GetAllBeneficiary();

        const beneficiary = await service.execute();

        return response.json(beneficiary);
    }
}

export class UpdateBeneficiaryController{
    async handle(request: Request, response: Response){
        const {id} = request.params;
        const{name, age, holderplan_id} = request.body;

        const service = new UpdateBeneficiary();

        const result = await service.execute({id, name,age,holderplan_id});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}
import { Request, Response } from "express";
import { CreatePlan, GetAllPlans, DeletePlan, UpdatePlan, GetAllPlanPrices } from "../service/PlansServices";

export class CreatePlanController {
    async handle(request: Request, response: Response) {
        const { registro, name, codigo } = request.body;

        const service = new CreatePlan();

        const result = await service.execute({ registro, name, codigo });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).json(result);

    }
}

export class DeletePlanController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeletePlan();

        const result = await service.execute(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}

export class GetAllPlansController {
    async handle(request: Request, response: Response) {
        const service = new GetAllPlans();

        const plan = await service.execute();

        return response.json(plan);
    }
}

export class GetAllPlanPriceController {
    async handle(request: Request, response: Response) {
        const service = new GetAllPlanPrices();

        const plan = await service.execute();


        return response.json(plan);
    }
}

export class UpdatePlanController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { registro, name, codigo } = request.body;

        const service = new UpdatePlan();

        const result = await service.execute({ id, registro, name, codigo });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}
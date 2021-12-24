import { getRepository } from "typeorm";
import { Plans } from "../entities/Plans";

type PlansRequest = {
    id?: string;
    registro: string;
    name: string;
    codigo: number;
}


export class CreatePlan {
    async execute({ registro, name, codigo }: PlansRequest): Promise<Plans | Error> {
        const repo = getRepository(Plans);

        const plans = repo.create({
            registro,
            name,
            codigo
        })

        await repo.save(plans);

        return plans;
    }
}

export class GetAllPlans {
    async execute() {
        const repo = getRepository(Plans);

        const plans = await repo.find({
            relations: ["price", "holder"]
        });

        return plans;
    }
}

export class UpdatePlan {
    async execute({ id, registro, name, codigo }: PlansRequest) {
        const repo = getRepository(Plans);

        const plan = await repo.findOne(id)

        if (!plan) {
            return new Error("Plano does not exist");
        }

        plan.registro = registro ? registro : plan.registro
        plan.name = name ? name : plan.name
        plan.codigo = codigo ? codigo : plan.codigo

        await repo.save(plan);

        return plan;
    }
}

export class DeletePlan {
    async execute(id: string) {
        const repo = getRepository(Plans);

        if (!(await repo.findOne(id))) {
            return new Error("Plano does not exist");
        }

        await repo.delete(id);
    }
}

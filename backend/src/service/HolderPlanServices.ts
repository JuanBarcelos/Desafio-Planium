import { getRepository } from "typeorm";
import { HolderPlan } from "../entities/HolderPlan";

type HolderRequest = {
    id?: string;
    name: string;
    age: number;
    plans_id: string;
    totalBeneficiary: number;
}

export class CreateHolderPlan {
    async execute({ name,age,totalBeneficiary,plans_id }: HolderRequest): Promise<HolderPlan | Error> {
        const repo = getRepository(HolderPlan);

        const holder = repo.create({
            name,
            age,
            totalBeneficiary,
            plans_id
        })

        await repo.save(holder);

        return holder;
    }
}

export class GetAllHolderPlan {
    async execute() {
        const repo = getRepository(HolderPlan);

        const holder = await repo.find({relations:['beneficiary','plan']});

        return holder;
    }
}

export class UpdateHolderPlan {
    async execute({ id,name,age,totalBeneficiary,plans_id }: HolderRequest) {
        const repo = getRepository(HolderPlan);

        const holder = await repo.findOne(id)

        if (!holder) {
            return new Error("Titular does not exist");
        }

        holder.name = name ? name : holder.name
        holder.age = age ? age : holder.age
        holder.totalBeneficiary = totalBeneficiary ? totalBeneficiary : holder.totalBeneficiary
        holder.plans_id = plans_id ? plans_id : holder.plans_id

        await repo.save(holder);

        return holder;
    }
}

export class DeleteHolderPlan {
    async execute(id: string) {
        const repo = getRepository(HolderPlan);

        if (!(await repo.findOne(id))) {
            return new Error("Titular does not exist");
        }

        await repo.delete(id);
    }
}
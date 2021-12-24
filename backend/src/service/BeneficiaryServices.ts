import { getRepository } from "typeorm";
import { Beneficiary } from "../entities/Beneficiary";


type BeneficiaryRequest = {
    id?: string;
    name: string;
    age: number;
    holderplan_id: string;
}


export class CreateBeneficiary {
    async execute({ name, age, holderplan_id }: BeneficiaryRequest): Promise<Beneficiary | Error> {
        const repo = getRepository(Beneficiary);

        const beneficiary = repo.create({name,age,holderplan_id});

        await repo.save(beneficiary);

        return beneficiary;
    }
}

export class GetAllBeneficiary {
    async execute() {
        const repo = getRepository(Beneficiary);

        const beneficiary = await repo.find({});

        return beneficiary;
    }
}

export class UpdateBeneficiary {
    async execute({ id, name, age, holderplan_id }: BeneficiaryRequest) {
        const repo = getRepository(Beneficiary);

        const beneficiary = await repo.findOne(id);

        if (!beneficiary) {
            return new Error("Plano does not exist");
        }

        beneficiary.name = name ? name : beneficiary.name
        beneficiary.age = age ? age : beneficiary.age
        beneficiary.holderplan_id = holderplan_id ? holderplan_id : beneficiary.holderplan_id

        await repo.save(beneficiary);

        return beneficiary;
    }
}

    export class DeleteBeneficiary {
    async execute(id: string) {
        const repo = getRepository(Beneficiary);

        if (!(await repo.findOne(id))) {
            return new Error("Plano does not exist");
        }

        await repo.delete(id);
    }
}

import { getRepository } from "typeorm";
import { Price } from "../entities/Price";

type PriceRequest = {
    id?: string;
    minimoVidas: number;
    faixa1: number;
    faixa2: number;
    faixa3: number;
    codigo: number;
    plans_id: string;
}


export class CreatePrice {
    async execute({ minimoVidas,faixa1,faixa2,faixa3,codigo,plans_id }: PriceRequest): Promise<Price | Error> {
        const repo = getRepository(Price);

        const price = repo.create({
            minimoVidas,
            faixa1,
            faixa2,
            faixa3,
            codigo,
            plans_id
        })

        await repo.save(price);

        return price;
    }
}

export class GetAllPrice {
    async execute() {
        const repo = getRepository(Price);

        const price = await repo.find(
        );

        return price;
    }
}

export class GetAllPricePlan {
    async execute() {
        const repo = getRepository(Price);

        const price = await repo.find(
           { relations: ["plan"]}
        );

        return price;
    }
}

export class UpdatePrice {
    async execute({ id, minimoVidas, faixa1,faixa2,faixa3,codigo,plans_id   }: PriceRequest) {
        const repo = getRepository(Price);

        const price = await repo.findOne(id)

        if (!price) {
            return new Error("Plano does not exist");
        }

        price.minimoVidas = minimoVidas ? minimoVidas : price.minimoVidas
        price.faixa1 = faixa1 ? faixa1 : price.faixa1
        price.faixa2 = faixa2 ? faixa2 : price.faixa2
        price.faixa3 = faixa3 ? faixa3 : price.faixa3
        price.codigo = codigo ? codigo : price.codigo
        price.plans_id = plans_id ? plans_id : price.plans_id

        await repo.save(price);

        return price;
    }
}

export class DeletePrice {
    async execute(id: string) {
        const repo = getRepository(Price);

        if (!(await repo.findOne(id))) {
            return new Error("Plano does not exist");
        }

        await repo.delete(id);
    }
}

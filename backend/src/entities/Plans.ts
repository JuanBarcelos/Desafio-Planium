import { Entity,PrimaryColumn, Column, OneToMany, OneToOne } from "typeorm";
import {v4 as uuid} from "uuid";
import { HolderPlan } from "./HolderPlan";
import { Price } from "./Price";
@Entity("tb_plans")
export class Plans{

    @PrimaryColumn()
    id: string;

    @Column()
    registro: string;

    @Column()
    name: string;

    @Column()
    codigo: number;

    @OneToMany(() => Price, price => price.plan)
    price: Price;

    @OneToOne(() => HolderPlan, holder => holder.plan)
    holder: HolderPlan[];

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
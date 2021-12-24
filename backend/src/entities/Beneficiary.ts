import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { HolderPlan } from "./HolderPlan";
import {v4 as uuid} from "uuid";

@Entity("tb_beneficiary")
export class Beneficiary{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    holderplan_id: string;

    @ManyToOne(() => HolderPlan)
    @JoinColumn({name: "holderplan_id"})
    holder: HolderPlan;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
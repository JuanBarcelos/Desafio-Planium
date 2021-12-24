import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Plans } from "./Plans";
import {v4 as uuid} from "uuid";

@Entity("tb_holderPlan")
export class HolderPlan{

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    plans_id: string;

    @Column()
    totalBeneficiary: number;

    @OneToOne(() => Plans)
    @JoinColumn({name:"plans_id"})
    plan: Plans

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}


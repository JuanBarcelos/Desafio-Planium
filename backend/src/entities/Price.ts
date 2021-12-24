import { Entity,PrimaryColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import {v4 as uuid} from "uuid";
import { Plans } from "./Plans";
@Entity("tb_prices")
export class Price{

    @PrimaryColumn()
    id: string;

    @Column()
    minimoVidas: number;

    @Column()
    faixa1: number;

    @Column()
    faixa2: number;

    @Column()
    faixa3: number;

    @Column()
    codigo: number;

    @Column()
    plans_id: string;

    @ManyToOne(() => Plans)
    @JoinColumn({name:"plans_id"})
    plan: Plans

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
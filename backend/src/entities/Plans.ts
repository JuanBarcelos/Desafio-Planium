import { Entity,PrimaryColumn, Column, OneToMany, JoinColumn } from "typeorm";
import {v4 as uuid} from "uuid";
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
    price: Price[];

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
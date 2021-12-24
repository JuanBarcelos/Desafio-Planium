import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TablePlans1640285620037 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({ 
                name:"tb_plans",
                columns: [
                    { 
                        name:"id",
                        type:"uuid",
                        isPrimary: true,
                        isUnique: true
                    },
                    { 
                        name: "registro",
                        type:"varchar",
                    },
                    { 
                        name: "name",
                        type:"varchar",
                    },
                    { 
                        name: "codigo",
                        type:"integer",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_plans")
    }

}

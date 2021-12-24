import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class HolderPaln1640349189643 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tb_holderPlan",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "age",
                        type: "integer",
                    },
                    {
                        name: "plans_id",
                        type: "uuid",
                    },
                    {
                        name: "totalBeneficiary",
                        type: "integer",
                    },
                ],
                foreignKeys:[
                    {
                        name: "fk_holder_plan",
                        columnNames:["plans_id"],
                        referencedTableName: "tb_plans",
                        referencedColumnNames:["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_holderPlan")
    }

}

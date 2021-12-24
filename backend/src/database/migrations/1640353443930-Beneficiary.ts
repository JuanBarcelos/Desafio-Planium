import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Beneficiary1640353443930 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"tb_beneficiary",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true,
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name: "age",
                        type:"integer",
                    },
                    {
                        name:"holderplan_id",
                        type:"uuid"
                    }
                ],
                foreignKeys:[
                    {
                        name:"fk_beneficiary_holderplan",
                        columnNames:["holderplan_id"],
                        referencedTableName: "tb_holderPlan",
                        referencedColumnNames:["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_beneficiary")
    }

}

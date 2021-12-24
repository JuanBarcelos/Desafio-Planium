import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TablePrice1640289586934 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_prices',
                columns: [
                    { 
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "minimoVidas",
                        type: "integer",
                    },
                    {
                        name: "faixa1",
                        type: "decimal",
                    },
                    {
                        name: "faixa2",
                        type: "decimal",
                    },
                    {
                        name: "faixa3",
                        type: "decimal",
                    },
                    {
                        name: "codigo",
                        type: "integer",
                    },
                    {
                        name:"plans_id",
                        type: "uuid",
                    }
                ],
                foreignKeys:[
                    {
                        name: "fk_plans_prices",
                        columnNames:["plans_id"],
                        referencedTableName: "tb_plans",
                        referencedColumnNames:["id"]
                    }
                ]
            })
        );
}

    public async down(queryRunner: QueryRunner): Promise < void> {
        await queryRunner.dropTable("tb_prices")
}

}

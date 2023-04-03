import { MigrationInterface, QueryRunner } from "typeorm";

export class fixTelephone1680467368877 implements MigrationInterface {
    name = 'fixTelephone1680467368877'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "telefone" TO "telephone"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "telefone" TO "telephone"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telephone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "telephone" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "telephone" character varying(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telephone" character varying(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "telephone" TO "telefone"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "telephone" TO "telefone"`);
    }

}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1664876828483 implements MigrationInterface {
  name = 'Init1664876828483';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`another_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`group\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`table_of_ref\` (\`anotherEntityId\` int NOT NULL, \`groupId\` int NOT NULL, PRIMARY KEY (\`anotherEntityId\`, \`groupId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`groupId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`group_to_another_entity\` (\`anotherEntityId\` int NOT NULL, \`groupId\` int NOT NULL, INDEX \`IDX_e47a8e6c2c4e12f209502140a4\` (\`anotherEntityId\`), INDEX \`IDX_b40313bc9675a1dcdfbeee03a1\` (\`groupId\`), PRIMARY KEY (\`anotherEntityId\`, \`groupId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_974590e8d8d4ceb64e30c38e051\` FOREIGN KEY (\`groupId\`) REFERENCES \`group\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`group_to_another_entity\` ADD CONSTRAINT \`FK_e47a8e6c2c4e12f209502140a4b\` FOREIGN KEY (\`anotherEntityId\`) REFERENCES \`group\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`group_to_another_entity\` ADD CONSTRAINT \`FK_b40313bc9675a1dcdfbeee03a19\` FOREIGN KEY (\`groupId\`) REFERENCES \`another_entity\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`group_to_another_entity\` DROP FOREIGN KEY \`FK_b40313bc9675a1dcdfbeee03a19\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`group_to_another_entity\` DROP FOREIGN KEY \`FK_e47a8e6c2c4e12f209502140a4b\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_974590e8d8d4ceb64e30c38e051\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_b40313bc9675a1dcdfbeee03a1\` ON \`group_to_another_entity\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_e47a8e6c2c4e12f209502140a4\` ON \`group_to_another_entity\``,
    );
    await queryRunner.query(`DROP TABLE \`group_to_another_entity\``);
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(`DROP TABLE \`table_of_ref\``);
    await queryRunner.query(`DROP TABLE \`group\``);
    await queryRunner.query(`DROP TABLE \`another_entity\``);
  }
}

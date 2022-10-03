import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init31664805635741 implements MigrationInterface {
  name = 'Init31664805635741';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`isActive\` \`groupId\` tinyint NOT NULL DEFAULT '1'`,
    );
    await queryRunner.query(
      `CREATE TABLE \`another_entity\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`group\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`last_name\` varchar(100) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`anotherEntityId\` int NOT NULL, INDEX \`IDX_ca60f35daa677b306f5ab95cca\` (\`firstName\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`table_of_ref\` (\`anotherEntityId\` int NOT NULL, \`groupId\` int NOT NULL, PRIMARY KEY (\`anotherEntityId\`, \`groupId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`groupId\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`groupId\` int NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_c6e71ec00586b4f6f0325e6990\` ON \`table_of_ref\` (\`anotherEntityId\`)`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_d75e7d17def68fbe997934741a\` ON \`table_of_ref\` (\`groupId\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_974590e8d8d4ceb64e30c38e051\` FOREIGN KEY (\`groupId\`) REFERENCES \`group\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`table_of_ref\` ADD CONSTRAINT \`FK_c6e71ec00586b4f6f0325e6990d\` FOREIGN KEY (\`anotherEntityId\`) REFERENCES \`group\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`table_of_ref\` ADD CONSTRAINT \`FK_d75e7d17def68fbe997934741ae\` FOREIGN KEY (\`groupId\`) REFERENCES \`another_entity\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`table_of_ref\` DROP FOREIGN KEY \`FK_d75e7d17def68fbe997934741ae\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`table_of_ref\` DROP FOREIGN KEY \`FK_c6e71ec00586b4f6f0325e6990d\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_974590e8d8d4ceb64e30c38e051\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_d75e7d17def68fbe997934741a\` ON \`table_of_ref\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_c6e71ec00586b4f6f0325e6990\` ON \`table_of_ref\``,
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`groupId\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`groupId\` tinyint NOT NULL DEFAULT '1'`,
    );
    await queryRunner.query(`DROP TABLE \`table_of_ref\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_ca60f35daa677b306f5ab95cca\` ON \`group\``,
    );
    await queryRunner.query(`DROP TABLE \`group\``);
    await queryRunner.query(`DROP TABLE \`another_entity\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`groupId\` \`isActive\` tinyint NOT NULL DEFAULT '1'`,
    );
  }
}

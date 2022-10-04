import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init51664868825144 implements MigrationInterface {
  name = 'Init51664868825144';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`table_of_ref\` DROP FOREIGN KEY \`FK_c6e71ec00586b4f6f0325e6990d\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`table_of_ref\` DROP FOREIGN KEY \`FK_d75e7d17def68fbe997934741ae\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_ca60f35daa677b306f5ab95cca\` ON \`group\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_c6e71ec00586b4f6f0325e6990\` ON \`table_of_ref\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_d75e7d17def68fbe997934741a\` ON \`table_of_ref\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_58e4dbff0e1a32a9bdc861bb29\` ON \`user\``,
    );
    await queryRunner.query(`DROP INDEX \`last_name\` ON \`user\``);
    await queryRunner.query(`ALTER TABLE \`group\` DROP COLUMN \`firstName\``);
    await queryRunner.query(`ALTER TABLE \`group\` DROP COLUMN \`isActive\``);
    await queryRunner.query(`ALTER TABLE \`group\` DROP COLUMN \`last_name\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`firstName\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`last_name\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_974590e8d8d4ceb64e30c38e051\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`groupId\` \`groupId\` int NULL`,
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
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`groupId\` \`groupId\` int NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_974590e8d8d4ceb64e30c38e051\` FOREIGN KEY (\`groupId\`) REFERENCES \`group\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`last_name\` varchar(100) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`firstName\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`group\` ADD \`last_name\` varchar(100) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`group\` ADD \`isActive\` tinyint NOT NULL DEFAULT '1'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`group\` ADD \`firstName\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX \`last_name\` ON \`user\` (\`last_name\`)`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_58e4dbff0e1a32a9bdc861bb29\` ON \`user\` (\`firstName\`)`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_d75e7d17def68fbe997934741a\` ON \`table_of_ref\` (\`groupId\`)`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_c6e71ec00586b4f6f0325e6990\` ON \`table_of_ref\` (\`anotherEntityId\`)`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_ca60f35daa677b306f5ab95cca\` ON \`group\` (\`firstName\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`table_of_ref\` ADD CONSTRAINT \`FK_d75e7d17def68fbe997934741ae\` FOREIGN KEY (\`groupId\`) REFERENCES \`another_entity\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`table_of_ref\` ADD CONSTRAINT \`FK_c6e71ec00586b4f6f0325e6990d\` FOREIGN KEY (\`anotherEntityId\`) REFERENCES \`group\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }
}

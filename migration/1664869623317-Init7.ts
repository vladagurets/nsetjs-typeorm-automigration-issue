import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init71664869623317 implements MigrationInterface {
  name = 'Init71664869623317';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`table_of_ref\` DROP FOREIGN KEY \`FK_c6e71ec00586b4f6f0325e6990d\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`table_of_ref\` DROP FOREIGN KEY \`FK_d75e7d17def68fbe997934741ae\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_c6e71ec00586b4f6f0325e6990\` ON \`table_of_ref\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_d75e7d17def68fbe997934741a\` ON \`table_of_ref\``,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_c6e71ec00586b4f6f0325e6990\` ON \`table_of_ref\` (\`anotherEntityId\`)`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_d75e7d17def68fbe997934741a\` ON \`table_of_ref\` (\`groupId\`)`,
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
      `DROP INDEX \`IDX_d75e7d17def68fbe997934741a\` ON \`table_of_ref\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_c6e71ec00586b4f6f0325e6990\` ON \`table_of_ref\``,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_d75e7d17def68fbe997934741a\` ON \`table_of_ref\` (\`groupId\`)`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_c6e71ec00586b4f6f0325e6990\` ON \`table_of_ref\` (\`anotherEntityId\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`table_of_ref\` ADD CONSTRAINT \`FK_d75e7d17def68fbe997934741ae\` FOREIGN KEY (\`groupId\`) REFERENCES \`another_entity\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`table_of_ref\` ADD CONSTRAINT \`FK_c6e71ec00586b4f6f0325e6990d\` FOREIGN KEY (\`anotherEntityId\`) REFERENCES \`group\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init21664803892575 implements MigrationInterface {
  name = 'Init21664803892575';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`lastName\` \`last_name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`last_name\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`last_name\` varchar(100) NOT NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX \`IDX_58e4dbff0e1a32a9bdc861bb29\` ON \`user\` (\`firstName\`)`,
    );
    await queryRunner.query(
      `CREATE INDEX \`last_name\` ON \`user\` (\`last_name\`)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX \`last_name\` ON \`user\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_58e4dbff0e1a32a9bdc861bb29\` ON \`user\``,
    );
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`last_name\``);
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`last_name\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` CHANGE \`last_name\` \`lastName\` varchar(255) NOT NULL`,
    );
  }
}

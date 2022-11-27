import { MigrationInterface, QueryRunner } from 'typeorm';

export class criacaoTabelaUsuario1669562490721 implements MigrationInterface {
  name = 'criacaoTabelaUsuario1669562490721';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`usuario_plataforma\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_04ba99f3d46fe29af4169acfc0\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`service\` DROP COLUMN \`valor_minimo\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`service\` ADD \`valor_minimo\` int NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`service\` DROP COLUMN \`valor_minimo\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`service\` ADD \`valor_minimo\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_04ba99f3d46fe29af4169acfc0\` ON \`usuario_plataforma\``,
    );
    await queryRunner.query(`DROP TABLE \`usuario_plataforma\``);
  }
}

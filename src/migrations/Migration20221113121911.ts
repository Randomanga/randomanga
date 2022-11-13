import { Migration } from '@mikro-orm/migrations';

export class Migration20221113121911 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "manga" alter column "description" type text using ("description"::text);');
  }

  async down(): Promise<void> {
    this.addSql('alter table "manga" alter column "description" type varchar(255) using ("description"::varchar(255));');
  }

}

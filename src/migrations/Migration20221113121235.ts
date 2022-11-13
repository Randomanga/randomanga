import { Migration } from '@mikro-orm/migrations';

export class Migration20221113121235 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "cover" alter column "id" type text using ("id"::text);');

    this.addSql('alter table "external_links" alter column "id" type text using ("id"::text);');

    this.addSql('alter table "manga" alter column "id" type text using ("id"::text);');
    this.addSql('alter table "manga" alter column "cover_id" type text using ("cover_id"::text);');
    this.addSql('alter table "manga" alter column "external_id" type text using ("external_id"::text);');

    this.addSql('alter table "title" alter column "id" type text using ("id"::text);');
  }

  async down(): Promise<void> {
    this.addSql('alter table "cover" alter column "id" type varchar(255) using ("id"::varchar(255));');

    this.addSql('alter table "external_links" alter column "id" type varchar(255) using ("id"::varchar(255));');

    this.addSql('alter table "manga" alter column "id" type varchar(255) using ("id"::varchar(255));');
    this.addSql('alter table "manga" alter column "cover_id" type varchar(255) using ("cover_id"::varchar(255));');
    this.addSql('alter table "manga" alter column "external_id" type varchar(255) using ("external_id"::varchar(255));');

    this.addSql('alter table "title" alter column "id" type varchar(255) using ("id"::varchar(255));');
  }

}

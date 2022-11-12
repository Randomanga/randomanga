import { Migration } from '@mikro-orm/migrations';

export class Migration20221112215217 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "manga" alter column "id" drop default;');
    this.addSql('alter table "manga" alter column "id" type uuid using ("id"::text::uuid);');
    this.addSql('alter table "manga" alter column "id" set default uuid_generate_v4();');
  }

  async down(): Promise<void> {
    this.addSql('alter table "manga" alter column "id" type text using ("id"::text);');

    this.addSql('alter table "manga" alter column "id" drop default;');
    this.addSql('alter table "manga" alter column "id" type varchar using ("id"::varchar);');
  }

}

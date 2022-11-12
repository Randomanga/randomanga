import { Migration } from '@mikro-orm/migrations';

export class Migration20221112201038 extends Migration {
    async up(): Promise<void> {
        this.addSql(
            'create table "manga" ("id" varchar(255) not null, "title" varchar(255) not null, constraint "manga_pkey" primary key ("id"));'
        );
    }

    async down(): Promise<void> {
        this.addSql('drop table if exists "manga" cascade;');
    }
}

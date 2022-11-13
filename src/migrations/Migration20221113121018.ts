import { Migration } from '@mikro-orm/migrations';

export class Migration20221113121018 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "cover" ("id" varchar(255) not null, "small" varchar(255) not null, "large" varchar(255) not null, "original" varchar(255) not null, constraint "cover_pkey" primary key ("id"));');

    this.addSql('create table "external_links" ("id" varchar(255) not null, "nu" varchar(255) not null, "mdex" varchar(255) not null, "mal" varchar(255) not null, "al" varchar(255) not null, "kitsu" varchar(255) not null, "mu" varchar(255) not null, constraint "external_links_pkey" primary key ("id"));');

    this.addSql('create table "manga" ("id" varchar(255) not null, "title" varchar(255) not null, "description" varchar(255) not null, "cover_id" varchar(255) not null, "banner" varchar(255) not null, "genres" text[] not null, "synonyms" text[] not null, "status" varchar(255) not null, "origin" varchar(255) not null, "external_id" varchar(255) not null, "chapters" int not null, "volumes" int not null, constraint "manga_pkey" primary key ("id"));');
    this.addSql('alter table "manga" add constraint "manga_cover_id_unique" unique ("cover_id");');
    this.addSql('alter table "manga" add constraint "manga_external_id_unique" unique ("external_id");');

    this.addSql('create table "title" ("id" varchar(255) not null, "english" varchar(255) not null, "romaji" varchar(255) not null, "native" varchar(255) not null, constraint "title_pkey" primary key ("id"));');

    this.addSql('alter table "manga" add constraint "manga_cover_id_foreign" foreign key ("cover_id") references "cover" ("id") on update cascade;');
    this.addSql('alter table "manga" add constraint "manga_external_id_foreign" foreign key ("external_id") references "external_links" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "manga" drop constraint "manga_cover_id_foreign";');

    this.addSql('alter table "manga" drop constraint "manga_external_id_foreign";');

    this.addSql('drop table if exists "cover" cascade;');

    this.addSql('drop table if exists "external_links" cascade;');

    this.addSql('drop table if exists "manga" cascade;');

    this.addSql('drop table if exists "title" cascade;');
  }

}

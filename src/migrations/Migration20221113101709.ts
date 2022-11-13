import { Migration } from '@mikro-orm/migrations';

export class Migration20221113101709 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "cover" ("id" uuid not null default uuid_generate_v4(), "small" varchar(255) not null, "large" varchar(255) not null, "original" varchar(255) not null, constraint "cover_pkey" primary key ("id"));');

    this.addSql('create table "external_links" ("id" uuid not null default uuid_generate_v4(), "nu" varchar(255) not null, "mdex" varchar(255) not null, "mal" varchar(255) not null, "al" varchar(255) not null, "kitsu" varchar(255) not null, "mu" varchar(255) not null, constraint "external_links_pkey" primary key ("id"));');

    this.addSql('create table "title" ("id" uuid not null default uuid_generate_v4(), "english" varchar(255) not null, "romaji" varchar(255) not null, "native" varchar(255) not null, constraint "title_pkey" primary key ("id"));');

    this.addSql('alter table "manga" add column "description" varchar(255) not null, add column "cover_id" uuid not null, add column "banner" varchar(255) not null, add column "genres" text[] not null, add column "synonyms" text[] not null, add column "status" varchar(255) not null, add column "origin" varchar(255) not null, add column "external_id" uuid not null, add column "chapters" int not null, add column "volumes" int not null;');
    this.addSql('alter table "manga" add constraint "manga_cover_id_foreign" foreign key ("cover_id") references "cover" ("id") on update cascade;');
    this.addSql('alter table "manga" add constraint "manga_external_id_foreign" foreign key ("external_id") references "external_links" ("id") on update cascade;');
    this.addSql('alter table "manga" add constraint "manga_cover_id_unique" unique ("cover_id");');
    this.addSql('alter table "manga" add constraint "manga_external_id_unique" unique ("external_id");');
  }

  async down(): Promise<void> {
    this.addSql('alter table "manga" drop constraint "manga_cover_id_foreign";');

    this.addSql('alter table "manga" drop constraint "manga_external_id_foreign";');

    this.addSql('drop table if exists "cover" cascade;');

    this.addSql('drop table if exists "external_links" cascade;');

    this.addSql('drop table if exists "title" cascade;');

    this.addSql('alter table "manga" drop constraint "manga_cover_id_unique";');
    this.addSql('alter table "manga" drop constraint "manga_external_id_unique";');
    this.addSql('alter table "manga" drop column "description";');
    this.addSql('alter table "manga" drop column "cover_id";');
    this.addSql('alter table "manga" drop column "banner";');
    this.addSql('alter table "manga" drop column "genres";');
    this.addSql('alter table "manga" drop column "synonyms";');
    this.addSql('alter table "manga" drop column "status";');
    this.addSql('alter table "manga" drop column "origin";');
    this.addSql('alter table "manga" drop column "external_id";');
    this.addSql('alter table "manga" drop column "chapters";');
    this.addSql('alter table "manga" drop column "volumes";');
  }

}

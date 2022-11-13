import { ConnectionArgs } from '@app/libs/relay/connection';
import { Knex } from '@mikro-orm/postgresql';
//@ts-ignore
import { knexPaginator } from 'apollo-cursor-pagination';

export function paginate(knex: Knex.QueryBuilder, args: ConnectionArgs) {
    return knexPaginator(knex, args);
}

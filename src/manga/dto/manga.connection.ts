import { Manga } from '@app/entities';
import { PageInfo } from '@app/libs/relay';
import { Field, ObjectType } from '@nestjs/graphql';
import * as Relay from 'graphql-relay';

@ObjectType({ isAbstract: true })
abstract class MangaEdge implements Relay.Edge<Manga> {
    @Field(() => Manga)
    readonly node!: Manga;

    @Field()
    readonly cursor!: Relay.ConnectionCursor;
}

@ObjectType()
export class MangaConnection implements Relay.Connection<Manga> {
    @Field(() => [MangaEdge])
    edges!: Relay.Edge<Manga>[];

    @Field()
    pageInfo!: PageInfo;
}

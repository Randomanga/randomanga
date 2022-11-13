import * as GraphQL from '@nestjs/graphql';
import { GlobalIdField } from './global-id-field.decorator';

jest.mock('@nestjs/graphql');

describe('GlobalIdField', () => {
    beforeEach(async () => {
        jest.clearAllMocks();
    });

    it('should set the default options', () => {
        GlobalIdField();

        expect(GraphQL.ResolveField).toHaveBeenCalledTimes(1);
        expect(GraphQL.ResolveField).toHaveBeenCalledWith(
            expect.any(Function),
            {
                name: 'id',
                nullable: false
            }
        );
    });

    describe('when the complexity option is provided', () => {
        it('should pass it to the field resolver', () => {
            GlobalIdField({ complexity: 1 });

            expect(GraphQL.ResolveField).toHaveBeenCalledTimes(1);
            expect(GraphQL.ResolveField).toHaveBeenCalledWith(
                expect.any(Function),
                {
                    name: 'id',
                    nullable: false,
                    complexity: 1
                }
            );
        });
    });
});

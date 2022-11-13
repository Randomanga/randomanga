import { Int } from '@nestjs/graphql';
import { returnsInt } from './scalars.utils';

describe('Scalar Utils', () => {
    describe('returnsInt', () => {
        it('should return the Int type', () => {
            expect(returnsInt()).toEqual(Int);
        });
    });
});

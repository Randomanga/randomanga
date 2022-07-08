import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateExternalInput {
  nu?: string;
  mal?: string;
  kitsu?: string;
  al?: string;
  mdex?: string;
  mu?: string;
}

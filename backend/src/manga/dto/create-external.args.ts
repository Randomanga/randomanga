import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateExternalArgs {
  nu?: string;
  mal?: string;
  kitsu?: string;
  al?: string;
  mdex?: string;
  mu?: string;
}

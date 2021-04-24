export class CreateSubscribersRequestDto {
  name: string;
  subscribedToChannel: string;
}
export class CreateSubscribersResponseDto {
  _id: string;
  name: string;
  subscribedToChannel: string;
  createdAt: Date;
}

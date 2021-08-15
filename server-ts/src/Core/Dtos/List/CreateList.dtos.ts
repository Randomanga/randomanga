export class SaveListRequestDto {
  list: [
    {
      id: number;
      rank: number;
    }
  ];
  description: string;
  author: string;
  title: string;
}

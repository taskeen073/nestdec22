import { IsNumber, IsString } from 'class-validator';

export class TaskCreateDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}

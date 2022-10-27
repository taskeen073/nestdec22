import { IsNumber, IsString } from 'class-validator';

export class TaskDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}
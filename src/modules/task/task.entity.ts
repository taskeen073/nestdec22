import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;
  @Column({nullable: false,})
  name: string;
}

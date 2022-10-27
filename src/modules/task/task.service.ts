import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskCreateDto } from './dto/task.create.dto';
import { TaskDto } from './dto/task.dto';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  async create(taskCreateDto: TaskCreateDto) {
    return this.taskRepository.save(taskCreateDto);
  }

  async findAll(): Promise<TaskDto[]> {
    return this.taskRepository.find();
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskCreateDto } from './dto/task.create.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post()
  create(@Body() taskCreateDto: TaskCreateDto) {
    const result = this.taskService.create(taskCreateDto);
    return result;
  }

  @Get()
  getAll() {
    return this.taskService.findAll();
  }
}
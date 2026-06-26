import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {

  constructor(
    private readonly todoService: TodosService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateTodoDto,
  ) {
    return this.todoService.create(dto);
  }

  @Get()
  findAll(){
    return this.todoService.findAll();
  }

  @Get(":id")
  findOne(@Param('id') id:String){
    return this.todoService.findOne(id);
  }

}
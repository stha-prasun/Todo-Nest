import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.schema';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name)
    private todoModel: Model<Todo>,
  ) {}

  async create(dto: CreateTodoDto) {
    return this.todoModel.create(dto);
  }

  async findAll(){
    return this.todoModel.find();
  }

  async findOne(id: String){
    const todo = await this.todoModel.findById(id);

    if(!todo){
      throw new NotFoundException("Todo Not Found");
    }

    return todo;
  }
}

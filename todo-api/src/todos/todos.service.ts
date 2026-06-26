import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schemas/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
    constructor(
        @InjectModel(Todo.name)
        private todoModel: Model<Todo>,
    ) {}
}

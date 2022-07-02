import { NotFoundError } from '../common/errors/not-found.error';

import type { CreateTodoDto } from './dto/create-todo.dto';
import type { UpdateTodoDto } from './dto/update-todo.dto';
import type { TodoDto } from './dto/todo.dto';
import type { TodoService as TodoServiceInterface } from './interfaces/todo-service.interface';

export class TodoService implements TodoServiceInterface {
  private todoItems: TodoDto[] = [];

  public async add(data: CreateTodoDto): Promise<TodoDto> {
    const todoItem: TodoDto = {
      id: this.todoItems.length + 1,
      description: data.description,
      completed: false,
    };
    this.todoItems.push(todoItem);
    return todoItem;
  }

  public async getAll(): Promise<TodoDto[]> {
    return this.todoItems;
  }

  public async getById(id: number): Promise<TodoDto> {
    const todoItem = this.todoItems.find((todoItem) => todoItem.id === id);
    if (!todoItem) {
      throw new NotFoundError(`Item #${id} was not found.`);
    }
    return todoItem;
  }

  public async remove(id: number): Promise<void> {
    this.todoItems = this.todoItems.filter((todoItem) => todoItem.id !== id);
  }

  public async update(id: number, data: UpdateTodoDto): Promise<TodoDto> {
    const todoItem = await this.getById(id);
    return Object.assign(todoItem, data);
  }
}

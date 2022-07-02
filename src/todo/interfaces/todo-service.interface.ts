import type { CreateTodoDto } from '../dto/create-todo.dto';
import type { TodoDto } from '../dto/todo.dto';
import type { UpdateTodoDto } from '../dto/update-todo.dto';

export interface TodoService {
  add(data: CreateTodoDto): Promise<TodoDto>;
  getAll(): Promise<TodoDto[]>;
  getById(id: number): Promise<TodoDto | undefined>;
  remove(id: number): Promise<void>;
  update(id: number, data: UpdateTodoDto): Promise<TodoDto>;
}

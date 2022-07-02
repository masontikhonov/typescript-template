import type { Request, Response } from 'express';
import type { Controller } from '../../common/interfaces/controller.interface';
import type { CreateTodoDto } from '../dto/create-todo.dto';
import type { TodoDto } from '../dto/todo.dto';
import type { UpdateTodoDto } from '../dto/update-todo.dto';

export interface TodoController extends Controller {
  add(
    req: Request<any, any, CreateTodoDto>,
    res: Response<TodoDto>,
  ): Promise<void>;
  getAll(_req: Request, res: Response<TodoDto[]>): Promise<void>;
  getById(req: Request<{ id: string }>, res: Response<TodoDto>): Promise<void>;
  remove(req: Request<{ id: string }>, res: Response<void>): Promise<void>;
  update(
    req: Request<{ id: string }, any, UpdateTodoDto>,
    res: Response<TodoDto>,
  ): Promise<void>;
}

import { HttpStatusCodes } from '../common/enum/http-status-codes.enum';
import { NotFoundError } from '../common/errors/not-found.error';
import { TodoPath } from './enum/todo-path.enum';

import type { Router, Request, Response } from 'express';
import type { CreateTodoDto } from './dto/create-todo.dto';
import type { UpdateTodoDto } from './dto/update-todo.dto';
import type { TodoDto } from './dto/todo.dto';
import type { TodoController as TodoControllerInterface } from './interfaces/todo-controller.interface';
import type { TodoService } from './todo.service';

export class TodoController implements TodoControllerInterface {
  private readonly service: TodoService;
  public readonly router: Router;

  constructor(service: TodoService, router: Router) {
    this.service = service;
    this.router = router;
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.post(TodoPath.Root, this.add.bind(this));
    this.router.get(TodoPath.Root, this.getAll.bind(this));
    this.router.get(TodoPath.Id, this.getById.bind(this));
    this.router.delete(TodoPath.Id, this.remove.bind(this));
    this.router.patch(TodoPath.Id, this.update.bind(this));
  }

  private handleErrors(err: unknown, res: Response): void {
    if (err instanceof NotFoundError) {
      res.status(HttpStatusCodes.ServerError).json({ error: err.message });
    } else {
      res
        .status(HttpStatusCodes.ServerError)
        .json({ error: 'Internal server error' });
    }
  }

  public async add(
    req: Request<any, any, CreateTodoDto>,
    res: Response<TodoDto>,
  ): Promise<void> {
    try {
      const todo = await this.service.add(req.body);
      res.status(HttpStatusCodes.Created).json(todo);
    } catch (error) {
      this.handleErrors(error, res);
    }
  }

  public async getAll(_req: Request, res: Response<TodoDto[]>): Promise<void> {
    try {
      const todos = await this.service.getAll();
      res.status(HttpStatusCodes.OK).json(todos);
    } catch (error) {
      this.handleErrors(error, res);
    }
  }

  public async getById(
    req: Request<{ id: string }>,
    res: Response<TodoDto>,
  ): Promise<void> {
    try {
      const todo = await this.service.getById(+req.params['id']);
      res.status(HttpStatusCodes.OK).json(todo);
    } catch (error) {
      this.handleErrors(error, res);
    }
  }

  public async remove(
    req: Request<{ id: string }>,
    res: Response<void>,
  ): Promise<void> {
    try {
      await this.service.remove(+req.params['id']);
      res.status(HttpStatusCodes.NoContent).json();
    } catch (error) {
      this.handleErrors(error, res);
    }
  }

  public async update(
    req: Request<{ id: string }, any, UpdateTodoDto>,
    res: Response<TodoDto>,
  ): Promise<void> {
    try {
      const todo = await this.service.update(+req.params['id'], req.body);
      res.status(HttpStatusCodes.OK).json(todo);
    } catch (error) {
      this.handleErrors(error, res);
    }
  }
}

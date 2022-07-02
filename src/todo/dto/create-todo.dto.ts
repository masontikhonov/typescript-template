import type { TodoDto } from './todo.dto';

export type CreateTodoDto = Pick<TodoDto, 'description'>;

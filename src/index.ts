import { default as express } from 'express';
import { Path } from './common/enum/path.enum';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';

const todoController = new TodoController(new TodoService(), express.Router());

const app = express();
const port = process.env['PORT'] ?? 3000;

app.use(express.json());

app.use(Path.Todo, todoController.router);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

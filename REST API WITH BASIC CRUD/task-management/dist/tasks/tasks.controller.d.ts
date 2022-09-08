import { TasksService } from './tasks.service';
import { Tasks } from './task.model';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAllTasks(): Tasks[];
    createTask(likes: number, dislikes: number, isActive: boolean, __v: number, _id: string, author: string, quote: string, tags: string): Tasks;
    getTaskById(id: string): Tasks;
    deleteTask(_id: string): string;
}

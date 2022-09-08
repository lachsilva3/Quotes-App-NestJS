import { Tasks } from './task.model';
export declare class TasksService {
    private tasks;
    getAllTask(): Tasks[];
    getTaskById(_id: string): Tasks;
    createTask(likes: number, dislikes: number, isActive: boolean, _id: string, quote: string, author: string, tags: string, __v: number): Tasks;
    deleteTask(_id: string): void;
    updateTaskStatus(_id: string, taskStatus: any): Tasks;
}

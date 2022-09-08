import { Injectable } from '@nestjs/common';
import { Tasks } from './task.model';

@Injectable()
export class TasksService {
    private tasks :Tasks[]=[];
// GET
    getAllTask():Tasks[]{
        return this.tasks;
    }
// GET by id
    getTaskById(_id:string):Tasks{
        return this.tasks.find(task=>task._id===_id);
    }

// POST
    createTask(likes:number,dislikes:number,isActive:boolean,_id:string,quote:string,author:string,tags:string,__v:number):Tasks{
        const task:Tasks={
            likes,
            dislikes,
            isActive,
            _id,
            quote,
            author,
            tags,
            __v,
        }
        this.tasks.push(task)
        return task
    }
// DELETE
    deleteTask(_id:string){
       this.tasks=this.tasks.filter(task=>task._id!==_id)
    }

// UPDATE
updateTaskStatus(_id:string,taskStatus):Tasks{
        let task=this.getTaskById(_id)
        return task
    }
}
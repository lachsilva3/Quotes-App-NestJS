import { Body, Controller, Delete, Get, Param, Patch, Post,  } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks} from './task.model'
import { title } from 'process';

@Controller('tasks')
export class TasksController {
    constructor(private taskService:TasksService){}
//  GET
    @Get()
    getAllTasks():Tasks[]{
        return this.taskService.getAllTask();
    }
    
// POST
    @Post()
    createTask(@Body('likes')likes:number,@Body('dislikes')dislikes:number,@Body('isActive')isActive:boolean,@Body('__v')__v:number,
    @Body('_id')_id:string,@Body('auhtor')author:string,
    @Body('quote')quote:string,
    @Body('tags')tags:string):Tasks{
        return this.taskService.createTask(likes,dislikes,isActive,_id,author,quote,tags,__v);
    }

// GET by id
    @Get('/:_id')
    getTaskById(@Param('_id')id:string):Tasks{
        return this.taskService.getTaskById(id);

    }

// DELETE
    @Delete('/:_id')
    deleteTask(@Param('_id') _id:string){
        this.taskService.deleteTask(_id);
        return `quote of this  ${_id} is deleted`
    }



}
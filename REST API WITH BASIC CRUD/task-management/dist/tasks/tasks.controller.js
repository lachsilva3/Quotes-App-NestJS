"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
let TasksController = class TasksController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    getAllTasks() {
        return this.taskService.getAllTask();
    }
    createTask(likes, dislikes, isActive, __v, _id, author, quote, tags) {
        return this.taskService.createTask(likes, dislikes, isActive, _id, author, quote, tags, __v);
    }
    getTaskById(id) {
        return this.taskService.getTaskById(id);
    }
    deleteTask(_id) {
        this.taskService.deleteTask(_id);
        return `quote of this  ${_id} is deleted`;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], TasksController.prototype, "getAllTasks", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('likes')),
    __param(1, (0, common_1.Body)('dislikes')),
    __param(2, (0, common_1.Body)('isActive')),
    __param(3, (0, common_1.Body)('__v')),
    __param(4, (0, common_1.Body)('_id')),
    __param(5, (0, common_1.Body)('auhtor')),
    __param(6, (0, common_1.Body)('quote')),
    __param(7, (0, common_1.Body)('tags')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Boolean, Number, String, String, String, String]),
    __metadata("design:returntype", Object)
], TasksController.prototype, "createTask", null);
__decorate([
    (0, common_1.Get)('/:_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], TasksController.prototype, "getTaskById", null);
__decorate([
    (0, common_1.Delete)('/:_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "deleteTask", null);
TasksController = __decorate([
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesService = void 0;
const common_1 = require("@nestjs/common");
const quotes_mock_1 = require("./quotes.mock");
let QuotesService = class QuotesService {
    constructor() {
        this.quotes = quotes_mock_1.QUOTES;
    }
    getCars() {
        return this.quotes;
    }
    postCar(quotes) {
        return this.quotes.push(quotes);
    }
    getCarById(id) {
        const carId = String(id);
        return new Promise((resolve) => {
            const quotes = this.quotes.find((quotes) => quotes.id === id);
            if (quotes) {
                throw new common_1.HttpException('Not Found', 404);
            }
            return resolve(quotes);
        });
    }
    deleteCarById(id) {
        const carId = String(id);
        return new Promise((resolve) => {
            const index = this.quotes.findIndex((quotes) => quotes.id === carId);
            if (index === -1) {
                throw new common_1.HttpException('Not Found', 404);
            }
            this.quotes.splice(index, 1);
            return resolve(this.quotes);
        });
    }
    putCarById(id, propertyName, propertyValue) {
        const carId = String(id);
        return new Promise((resolve) => {
            const index = this.quotes.findIndex((quotes) => quotes.id === carId);
            if (index === -1) {
                throw new common_1.HttpException('Not Found', 404);
            }
            this.quotes[index][propertyName] = propertyValue;
            return resolve(this.quotes[index]);
        });
    }
};
QuotesService = __decorate([
    (0, common_1.Injectable)()
], QuotesService);
exports.QuotesService = QuotesService;
//# sourceMappingURL=quotes.service.js.map
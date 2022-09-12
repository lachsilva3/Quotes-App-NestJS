import { Injectable, HttpException } from '@nestjs/common';
import { resolve } from 'path';
import { QUOTES } from './quotes.mock';


@Injectable()
export class QuotesService {
    private quotes = QUOTES;
// GET
    public  getCars(){
        return this.quotes;
    }

// POST
    public  postCar(quotes){
        return this.quotes.push(quotes);
    }
// GET BY ID
    public  getCarById(id: string): Promise<any>{
        const carId=String(id);
        return new Promise((resolve)=>{
        const quotes = this.quotes.find((quotes) => quotes.id === id);
        if(quotes){
            throw new HttpException('Not Found',404);
        }
       return resolve(quotes);
    });
}
// DELETE
    public  deleteCarById(id: string):Promise<any>{
        const carId=String(id);
        return new Promise((resolve)=>{
        const index = this.quotes.findIndex((quotes) => quotes.id === carId);
        if (index === -1){
            throw new HttpException('Not Found',404);
        }
        this.quotes.splice(index, 1);
        return resolve(this.quotes);
        });
    }
// PATCH/UPDATE
    public  putCarById(id: String, propertyName: string, propertyValue:string):Promise<any>{
        const carId=String(id);
        return new Promise((resolve)=>{
        const index = this.quotes.findIndex((quotes) => quotes.id===carId);
        if (index === -1){
            throw new HttpException('Not Found',404);
        }
        this.quotes[index][propertyName]= propertyValue;
        return resolve(this.quotes[index]);
    });
    }
}

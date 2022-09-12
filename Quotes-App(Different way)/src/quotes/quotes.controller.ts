import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesDto } from './quotes.dto';
import { query } from 'express';


@Controller('quotes')
export class QuotesController {
    constructor(private quotesService: QuotesService) {}
// get
    @Get()
    public async getCars() {
        return this.quotesService.getCars();
    }
    // post
    @Post()
    public  postCar(@Body() quotes:QuotesDto){
        return this.quotesService.postCar(quotes);
    }
// getbyid
    @Get(':id')
    public async getCarById(@Param('id') id:string){
        return  this.quotesService.getCarById(id);
    }
// delete by id
    @Delete(':id')
    public async deleteCarById(@Param('id')id:string){
        this.quotesService.deleteCarById(id);
    }
    //update 
    @Put()
    public async putCarById(@Param('id')id:string, @Query()query){
        const property_Name=query.property_name;
        const propertyValue=query.property_value;
        return this.quotesService.putCarById(id,property_Name,propertyValue);
    }   
}

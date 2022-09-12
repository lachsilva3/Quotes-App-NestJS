import { CarService } from './car.service';
import { CarDto } from './car.dto';
export declare class CarController {
    private carService;
    constructor(carService: CarService);
    getCars(): Promise<({
        likes: number;
        dislikes: number;
        isActive: boolean;
        id: string;
        quote: string;
        author: string;
        tags: string;
        __v: number;
    } | {
        likes: number;
        dislikes: number;
        isActive: boolean;
        id: string;
        quote: string;
        author: string;
        __v: number;
        tags?: undefined;
    })[]>;
    postCar(car: CarDto): number;
    getCarById(id: string): Promise<any>;
    deleteCarById(id: string): Promise<void>;
    putCarById(id: string, query: any): Promise<any>;
}

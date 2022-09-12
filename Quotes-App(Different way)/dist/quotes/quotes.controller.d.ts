import { QuotesService } from './quotes.service';
import { QuotesDto } from './quotes.dto';
export declare class QuotesController {
    private quotesService;
    constructor(quotesService: QuotesService);
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
    postCar(quotes: QuotesDto): number;
    getCarById(id: string): Promise<any>;
    deleteCarById(id: string): Promise<void>;
    putCarById(id: string, query: any): Promise<any>;
}

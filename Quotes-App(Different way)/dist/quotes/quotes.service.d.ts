export declare class QuotesService {
    private quotes;
    getCars(): ({
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
    })[];
    postCar(quotes: any): number;
    getCarById(id: string): Promise<any>;
    deleteCarById(id: string): Promise<any>;
    putCarById(id: String, propertyName: string, propertyValue: string): Promise<any>;
}

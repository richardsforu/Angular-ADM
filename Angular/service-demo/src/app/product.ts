import { IProduct } from './product-interface';
// 1 imports 
// 2 declarators : ex: @Component, @Injectable, @Pipe or @Module etc...
// 3. class declaration or Interface
export class Product implements IProduct {

    id: string;
    name: string;
    price: number;
    description: string;

    inStock: boolean; // new prop added .. possible

    constructor(id: string, name: string, price: number, description: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }



}
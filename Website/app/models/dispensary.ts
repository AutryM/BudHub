import { Product } from '../models/product';

export class Dispensary {
    id: number;
    name: string;
    lat: number;
    lng: number;
    products: Product[];
}
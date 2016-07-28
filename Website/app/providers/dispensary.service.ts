import { Injectable } from '@angular/core';
import { DISPENSARIES } from '../data/mock-dispensaries';

@Injectable()
export class DispensaryService {
    getDispensaries() {
        return Promise.resolve(DISPENSARIES);
    }
    getDispensary(id: number) {
        return this.getDispensaries()
            .then(dispensaries => dispensaries.find(dispensary => dispensary.id === id));
    }
}
import { Injectable } from '@angular/core';
import { USERS } from '../data/mock-users';
import { User } from '../models/user';

@Injectable()
export class UserService {
    getUsers() {
        return Promise.resolve(USERS);
    }
    getUser(id: number) {
        return this.getUsers()
            .then(users => users.find(user => user.id === id));
    }
}
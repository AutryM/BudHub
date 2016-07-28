import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../providers/user.service';

@Component({
    selector: 'user-detail',
    templateUrl: 'app/views/user-detail.component.html',
    providers: [UserService],
})

export class UserDetailComponent {
    selectedUser: User = new User();

    constructor(
        private router: Router,
        private userService: UserService) { }

    loginClick(userToValidate: User) {
        this.userService.getUsers().then(function (users) {
            for (var user of users) {
                if (user.email == userToValidate.email && user.password == userToValidate.password) {
                    return user;                    
                }
            }
            return null;
        }).then(user => this.login(user));
    }

    login(user: User) {
        if (user != null) {
            let link = ['/dashboard', user.id];
            this.router.navigate(link);
        }
    }

}

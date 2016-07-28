import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { Dispensary } from '../models/dispensary';
import { DispensaryService } from '../providers/dispensary.service';
import { UserService } from '../providers/user.service';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import { DispensaryDetailComponent } from '../controllers/dispensary-detail.component';

@Component({
    selector: 'user-detail',
    templateUrl: 'app/views/dashboard.component.html',
    providers: [DispensaryService, UserService],
    directives: [GOOGLE_MAPS_DIRECTIVES, DispensaryDetailComponent]
})

export class DashboardComponent implements OnInit, OnDestroy {
    user: User;
    selectedDispensary: Dispensary;
    dispensaries: Dispensary[] = [];
    lat: number = 39.7392;
    lng: number = -104.9903;
    sub: any;

    constructor(
        private dispensaryService: DispensaryService,
        private userService: UserService,
        private route: ActivatedRoute) { }

    markerClicked(dispensary: Dispensary) {
        this.selectedDispensary = dispensary;
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.userService.getUser(id)
                .then(user => this.user = user);
        });

        this.dispensaryService.getDispensaries().then(dispensaries => this.dispensaries = dispensaries);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}

import { Component } from '@angular/core';
import { IntroComponent } from './intro.component';
import { DispensaryService } from '../providers/dispensary.service';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
        `,        
        directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    title:string= 'BudHub';
}
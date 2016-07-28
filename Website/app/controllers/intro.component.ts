import { Component } from '@angular/core';
import { Dispensary } from '../models/dispensary';
import { OnInit } from '@angular/core';
import { DispensaryService } from '../providers/dispensary.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

const DISPENSARIES: Dispensary[] = [];

@Component({
    selector: 'intro',
    templateUrl: 'app/views/intro.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class IntroComponent {
    title:string= 'BudHub';

}
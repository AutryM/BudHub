import { provideRouter, RouterConfig }  from '@angular/router';
import { IntroComponent } from './controllers/intro.component';
import { UserDetailComponent } from './controllers/user-detail.component';
import { DashboardComponent } from './controllers/dashboard.component';
import { DispensaryDetailComponent } from './controllers/dispensary-detail.component';

const routes: RouterConfig = [
    {
        path: 'intro',
        component: IntroComponent
    },
    {
        path: 'user-detail',
        component: UserDetailComponent
    },
    {
        path: 'dashboard/:id',
        component: DashboardComponent
    },
    {
        path: 'dispensary/:id',
        component: DispensaryDetailComponent
    },
    {
        path: '',
        redirectTo: '/intro',
        pathMatch: 'full'
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
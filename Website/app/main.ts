import { bootstrap }    from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import { AppComponent } from './controllers/app.component';
import { appRouterProviders } from './app.routes';
import { enableProdMode } from '@angular/core';

import {GOOGLE_MAPS_PROVIDERS, LazyMapsAPILoaderConfig} from 'angular2-google-maps/core';

bootstrap(AppComponent, [
    appRouterProviders, GOOGLE_MAPS_PROVIDERS, provide(LazyMapsAPILoaderConfig, {
        useFactory: () => {
            let config = new LazyMapsAPILoaderConfig();
            config.apiKey = 'AIzaSyDNlPEKlz2uGUvWkxnZbDE30skf_-31KIs';
            return config;
        }
]);
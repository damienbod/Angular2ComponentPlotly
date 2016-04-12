﻿import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {OverviewComponent} from './overview/overview.component';
import { SnakeDataService } from './overview/SnakeDataService';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        SnakeDataService
    ]
})

@RouteConfig([
        { path: '/overview', name: 'Overview', component: OverviewComponent, useAsDefault: true },
])
 
export class AppComponent {

}
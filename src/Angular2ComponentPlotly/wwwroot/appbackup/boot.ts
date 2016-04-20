﻿import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';
import {AppComponent} from './app.component';
import { Configuration } from './app.constants';



bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    Configuration,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]).catch(err => console.error(err));



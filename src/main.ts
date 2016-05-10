import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AfwithngcliAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AfwithngcliAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://ci-dummy.firebaseio.com/')
]);

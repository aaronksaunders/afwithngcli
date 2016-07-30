import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES,MD_LIST_DIRECTIVES],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'afwithngcli works!';

  items: any;
  one: any;

  constructor(af: AngularFire) {
    this.items = af.database.list('/content-public');
  }
}

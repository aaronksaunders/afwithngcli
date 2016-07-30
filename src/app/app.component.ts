import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
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

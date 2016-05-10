import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'afwithngcli-app',
  templateUrl: 'afwithngcli.component.html',
  styleUrls: ['afwithngcli.component.css']
})
export class AfwithngcliAppComponent {
  title = 'afwithngcli works!';

  projects: any;
  one: any;

  constructor(af: AngularFire) {
    this.projects = af.list('/items').map((items) => {
      console.log(items);
      return items.map(item => {
        item.metadata = af.object('/items_meta/' + item.$key);
        console.log(this.one);
        return item;
      });
    });
  }
}

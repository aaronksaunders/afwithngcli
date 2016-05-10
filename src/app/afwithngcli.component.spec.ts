import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AfwithngcliAppComponent } from '../app/afwithngcli.component';

beforeEachProviders(() => [AfwithngcliAppComponent]);

describe('App: Afwithngcli', () => {
  it('should create the app',
      inject([AfwithngcliAppComponent], (app: AfwithngcliAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'afwithngcli works!\'',
      inject([AfwithngcliAppComponent], (app: AfwithngcliAppComponent) => {
    expect(app.title).toEqual('afwithngcli works!');
  }));
});

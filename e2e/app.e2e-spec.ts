import { AfwithngcliPage } from './app.po';

describe('afwithngcli App', function() {
  let page: AfwithngcliPage;

  beforeEach(() => {
    page = new AfwithngcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

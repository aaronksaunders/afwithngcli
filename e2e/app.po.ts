export class AfwithngcliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('afwithngcli-app h1')).getText();
  }
}

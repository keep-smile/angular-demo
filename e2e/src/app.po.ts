import { browser, by, element } from 'protractor';
import {count} from 'rxjs/operators';

export class AppPage {
  navigateTo(URI) {
    return browser.get(browser.baseUrl + URI) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.section-title span')).getText() as Promise<string>;
  }

  getFirstMatItemText(){
    return element(by.css('mat-list mat-list-item:first-child h3 a')).getText() as Promise<string>;
  }
  getFirstMatItemProjectsNumber(){
    return element(by.css('mat-list mat-list-item:first-child .align-right')).getText() as Promise<string>;
  }
}

import {AppPage} from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('');
  });

  describe('Students Page', () => {
    it('should display correct title', () => {
      expect(page.getTitleText()).toEqual('Students engagement details');
    });

    it('should contain first mat-list-item with proper user name', () => {
      expect(page.getFirstMatItemText()).toEqual('Brian Robert');
    });

    it('should contain correct projects number in the first mat-list-item', () => {
      expect(page.getFirstMatItemProjectsNumber()).toContain('2 projects');
    });

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});


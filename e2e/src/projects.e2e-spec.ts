import {AppPage} from './app.po';
import {browser, logging} from 'protractor';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('#/projects');
  });

  describe('Projects Page', () => {
    it('should display correct title', () => {
      expect(page.getTitleText()).toEqual('Projects');
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


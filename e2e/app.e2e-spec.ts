import { TempMonitorPage } from './app.po';

describe('temp-monitor App', () => {
  let page: TempMonitorPage;

  beforeEach(() => {
    page = new TempMonitorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

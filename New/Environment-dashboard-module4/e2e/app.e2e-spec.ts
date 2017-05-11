import { EnvironmentDashboardModule4Page } from './app.po';

describe('environment-dashboard-module4 App', () => {
  let page: EnvironmentDashboardModule4Page;

  beforeEach(() => {
    page = new EnvironmentDashboardModule4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

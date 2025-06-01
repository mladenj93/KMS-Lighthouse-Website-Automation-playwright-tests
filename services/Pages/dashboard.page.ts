import { ElementHandle, Locator, Page } from 'playwright';
import * as selectors from '../../selectors/selectors.json';

export default class DashboardPage {
  constructor(page: Page) {
    this.page = page;
  }

  private page: Page;


  public getBookADemoBtn(): Locator {
    return this.page.locator(selectors.dashboardPage.bookADemoBtn);
  }

  public getAcwpToolbarBtn(): Locator {
    return this.page.locator(selectors.dashboardPage.acwpToolbarBtn);
  }

  public getListOfWidgetToggles(): Locator {
    return this.page.locator(selectors.dashboardPage.listOfWidgetToggles);
  }
}
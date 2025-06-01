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

  public getAboutBtn(): Locator {
    return this.page.locator(selectors.dashboardPage.aboutBtn);
  }

  public getResourcesBtn(): Locator {
    return this.page.locator(selectors.dashboardPage.resourcesBtn);
  }

  public getCareersBtn(): Locator {
    return this.page.locator(selectors.dashboardPage.careersBtn);
  }

  public getBlogBtn(): Locator {
    return this.page.locator(selectors.dashboardPage.blogBtn);
  }

  public getAcwpToolbarBtn(): Locator {
    return this.page.locator(selectors.dashboardPage.acwpToolbarBtn);
  }

  public getListOfWidgetToggles(): Locator {
    return this.page.locator(selectors.dashboardPage.listOfWidgetToggles);
  }
}
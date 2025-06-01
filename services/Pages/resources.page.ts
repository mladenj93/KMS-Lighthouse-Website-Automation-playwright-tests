import { ElementHandle, Locator, Page } from 'playwright';
import * as selectors from '../../selectors/selectors.json';

export default class ResourcesPage {
  constructor(page: Page) {
    this.page = page;
  }

  private page: Page;


  public getListOfFilters(): Locator {
    return this.page.locator(selectors.resourcesPage.listOfFilter);
  }

  public getListOfResultsByFilter(): Locator {
    return this.page.locator(selectors.resourcesPage.listOfResultsByFilter);
  }
}
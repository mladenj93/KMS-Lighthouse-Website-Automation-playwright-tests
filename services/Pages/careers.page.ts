import { ElementHandle, Locator, Page } from 'playwright';
import * as selectors from '../../selectors/selectors.json';

export default class CareersPage {
  constructor(page: Page) {
    this.page = page;
  }

  private page: Page;


  public getListOfAds(): Locator {
    return this.page.locator(selectors.careersPage.listOfAds);
  }
}
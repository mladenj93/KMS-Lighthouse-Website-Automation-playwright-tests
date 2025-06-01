import { ElementHandle, Locator, Page, expect, selectors } from '@playwright/test';
import CareersPage from '../Pages/careers.page';

export default class CareersSteps {
  constructor(page: Page, careersPage: CareersPage) {
    this.page = page;
    this.careersPage = careersPage
  }

  private page: Page;
  private careersPage: CareersPage;

  async isAdsByTitleVisible(adTitle: string): Promise<boolean> {
    await this.page.waitForLoadState('load');
    for (let i = 0; i < await this.careersPage.getListOfAds().count(); i++) {
      await this.careersPage.getListOfAds().nth(i).scrollIntoViewIfNeeded();
      if ((await this.careersPage.getListOfAds().nth(i).innerText()).includes(adTitle)) {
        return true;
      }
    }
    return false;
  }
}
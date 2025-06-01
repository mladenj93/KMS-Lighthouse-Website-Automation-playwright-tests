import { ElementHandle, Locator, Page, expect, selectors } from '@playwright/test';
import ResourcesPage from '../Pages/resources.page';

export default class ResourcesSteps {
  constructor(page: Page, resourcesPage: ResourcesPage) {
    this.page = page;
    this.resourcesPage = resourcesPage;
  }

  private page: Page;
  private resourcesPage: ResourcesPage;

  async isFilterGiveGoodResults(): Promise<boolean> {
    await this.page.waitForLoadState('load');
    for (let i = 1; i < await this.resourcesPage.getListOfFilters().count(); i++) {
      await this.resourcesPage.getListOfFilters().nth(i).scrollIntoViewIfNeeded();
      await this.resourcesPage.getListOfFilters().nth(i).click();
      await this.page.waitForURL(await this.resourcesPage.getListOfFilters().nth(i).getAttribute('href'));
      for (let j = 0; j < await this.resourcesPage.getListOfResultsByFilter().count(); j++) {
        await this.resourcesPage.getListOfResultsByFilter().nth(j).scrollIntoViewIfNeeded();
        const tagOfElement: string = await this.resourcesPage.getListOfResultsByFilter().nth(j).locator('//div/div/div/div/p/a').innerText();
        if (!(await this.resourcesPage.getListOfFilters().nth(i).innerText()).includes(tagOfElement)) {
          return false;
        }
      }
    }
    return true;
  }
}
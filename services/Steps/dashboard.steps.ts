import { ElementHandle, Locator, Page, expect, selectors } from '@playwright/test';
import DashboardPage from '../Pages/dashboard.page';

export default class DashboardSteps {
  constructor(page: Page, dashboardPage: DashboardPage) {
    this.page = page;
    this.dashboardPage = dashboardPage
  }

  private page: Page;
  private dashboardPage: DashboardPage;

  async clickOnDemoABookBtn() {
    await this.dashboardPage.getBookADemoBtn().click();
  }

  async clickOnAcwpToolbarBtn() {
    await this.dashboardPage.getAcwpToolbarBtn().click();
  }

  async clickOnAboutBtn() {
    await this.dashboardPage.getAboutBtn().click();
  }

  async clickOnCareersBtn() {
    await this.dashboardPage.getCareersBtn().click();
  }

  async clickOnResourcesBtn() {
    await this.dashboardPage.getResourcesBtn().click();
  }

  async clickOnBlogBtn() {
    await this.dashboardPage.getBlogBtn().click();
  }

  async clickOnToggleByText(toogleName: string) {
    for (let i = 0; i < await this.dashboardPage.getListOfWidgetToggles().count(); i++) {
      const toggleText: string = await this.dashboardPage.getListOfWidgetToggles().nth(i).locator('//span').textContent();
      if (toggleText?.includes(toogleName)) {
        await this.dashboardPage.getListOfWidgetToggles().nth(i).click();
      }
    }
  }

  async hrefOfDemoABookBtn(): Promise<string> {
    return this.dashboardPage.getBookADemoBtn().getAttribute('href');
  }

  async hrefOfCareersBtn(): Promise<string> {
    return this.dashboardPage.getCareersBtn().getAttribute('href');
  }

  async isDemoABookBtnVisible(): Promise<boolean> {
    return this.dashboardPage.getBookADemoBtn().isVisible();
  }

  async isAcwpToolbarBtnVisible(): Promise<boolean> {
    return this.dashboardPage.getAcwpToolbarBtn().isVisible();
  }

  async isCheckedToogle(toogleName: string): Promise<boolean> {
    await this.page.waitForLoadState('load');
    for (let i = 0; i < await this.dashboardPage.getListOfWidgetToggles().count(); i++) {
      const toggleText: string = await this.dashboardPage.getListOfWidgetToggles().nth(i).locator('//span').textContent();
      if (toggleText?.includes(toogleName)) {
        return await this.dashboardPage.getListOfWidgetToggles().nth(i).locator('//div/input').isChecked();
      }
    }
    return false;
  }
}
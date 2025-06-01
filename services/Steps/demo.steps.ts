import { ElementHandle, Locator, Page, expect, selectors } from '@playwright/test';
import DemoPage from '../Pages/demo.page';

export default class DemoSteps {
  constructor(page: Page, demoPage: DemoPage) {
    this.page = page;
    this.demoPage = demoPage
  }

  private page: Page;
  private demoPage: DemoPage;

  async isFirstNameInputVisible(): Promise<boolean> {
    await this.page.waitForLoadState('load');
    return this.demoPage.getFirstNameInput().isVisible();
  }

  async isLastNameInputVisible(): Promise<boolean> {
    return this.demoPage.getLastNameInput().isVisible();
  }

  async isProfesionalEmailInputVisible(): Promise<boolean> {
    return this.demoPage.getProfesionalEmailInput().isVisible();
  }

  async isPhoneNumberInputVisible(): Promise<boolean> {
    return this.demoPage.getPhoneNumberInput().isVisible();
  }

  async isJobTitleInputVisible(): Promise<boolean> {
    return this.demoPage.getJobTitleInput().isVisible();
  }

  async isCountryRegionBtnVisible(): Promise<boolean> {
    return this.demoPage.getCountryRegionBtn().isVisible();
  }

  async isMessageInputVisible(): Promise<boolean> {
    return this.demoPage.getMessageInput().isVisible();
  }

  async isBookADemoInputVisible(): Promise<boolean> {
    return this.demoPage.getBookADemoBtn().isVisible();
  }
}
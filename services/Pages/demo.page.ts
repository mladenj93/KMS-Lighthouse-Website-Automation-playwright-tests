import { ElementHandle, Locator, Page } from 'playwright';
import * as selectors from '../../selectors/selectors.json';

export default class DemoPage {
  constructor(page: Page) {
    this.page = page;
  }

  private page: Page;


  public getFirstNameInput(): Locator {
    return this.page.locator(selectors.demoPage.firstNameInput);
  }

  public getLastNameInput(): Locator {
    return this.page.locator(selectors.demoPage.lastNameInput);
  }

  public getProfesionalEmailInput(): Locator {
    return this.page.locator(selectors.demoPage.profesionalEmailInput);
  }

  public getPhoneNumberInput(): Locator {
    return this.page.locator(selectors.demoPage.phoneNumberInput);
  }

  public getJobTitleInput(): Locator {
    return this.page.locator(selectors.demoPage.jobTitleInput);
  }

  public getCountryRegionBtn(): Locator {
    return this.page.locator(selectors.demoPage.countryRegionBtn);
  }

  public getMessageInput(): Locator {
    return this.page.locator(selectors.demoPage.messageInput);
  }

  public getBookADemoBtn(): Locator {
    return this.page.locator(selectors.demoPage.bookADemoBtn);
  }
}
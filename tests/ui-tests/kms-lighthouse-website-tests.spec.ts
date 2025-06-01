import { test, expect } from '@playwright/test';
import DashboardPage from '../../services/Pages/dashboard.page';
import DashboardSteps from '../../services/Steps/dashboard.steps';
import DemoPage from '../../services/Pages/demo.page';
import DemoSteps from '../../services/Steps/demo.steps';
import * as testData from '../../test-data/test-data.json'
import CareersPage from '../../services/Pages/careers.page';
import CareersSteps from '../../services/Steps/careers.steps';


test.describe('KMS Lighthouse website - Automation tests', () => {
  let dashboardPage: DashboardPage;
  let dashboardSteps: DashboardSteps;
  let demoPage: DemoPage;
  let demoSteps: DemoSteps;
  let careersPage: CareersPage;
  let careersSteps: CareersSteps;

  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    dashboardSteps = new DashboardSteps(page, dashboardPage);
    demoPage = new DemoPage(page);
    demoSteps = new DemoSteps(page, demoPage);
    careersPage = new CareersPage(page);
    careersSteps = new CareersSteps(page, careersPage);

    await page.goto('/', {
      waitUntil: 'networkidle'
    });

    expect(await dashboardSteps.isDemoABookBtnVisible());
  });

  test(`Test Case 1: Validate 'Book a Demo' Link Navigation`, async ({ page }) => {

    const hrefOfDemoABookBtn: string = await dashboardSteps.hrefOfDemoABookBtn();
    await dashboardSteps.clickOnDemoABookBtn();
    await expect(page).toHaveURL(hrefOfDemoABookBtn);
    expect(await demoSteps.isFirstNameInputVisible()).toBeTruthy();
    expect(await demoSteps.isLastNameInputVisible()).toBeTruthy();
    expect(await demoSteps.isProfesionalEmailInputVisible()).toBeTruthy();
    expect(await demoSteps.isPhoneNumberInputVisible()).toBeTruthy();
    expect(await demoSteps.isJobTitleInputVisible()).toBeTruthy();
    expect(await demoSteps.isCountryRegionBtnVisible()).toBeTruthy();
    expect(await demoSteps.isMessageInputVisible()).toBeTruthy();
    expect(await demoSteps.isBookADemoInputVisible()).toBeTruthy();
  });

  test(`Test Case 2: Validate Default State of Accessibility Toggles`, async ({ page }) => {

    expect(await dashboardSteps.isAcwpToolbarBtnVisible).toBeTruthy();
    await dashboardSteps.clickOnAcwpToolbarBtn();

    const biggerTextDefaultState: boolean = await dashboardSteps.isCheckedToogle(testData.dasboardPage.biggerText);
    const contrastToggleDefaultState: boolean = await dashboardSteps.isCheckedToogle(testData.dasboardPage.contrastToogle);
    const dyslexiaFriendlyFontDefaultState: boolean = await dashboardSteps.isCheckedToogle(testData.dasboardPage.dyslexiaFriendlyFont);
    const highlightLinksDefaultState: boolean = await dashboardSteps.isCheckedToogle(testData.dasboardPage.highlightLinks);

    await dashboardSteps.clickOnToggleByText(testData.dasboardPage.contrastToogle);
    expect(await dashboardSteps.isCheckedToogle(testData.dasboardPage.contrastToogle)).not.toBe(contrastToggleDefaultState);

    await dashboardSteps.clickOnToggleByText(testData.dasboardPage.contrastToogle);
    expect(await dashboardSteps.isCheckedToogle(testData.dasboardPage.contrastToogle)).toBe(contrastToggleDefaultState);
  });

  test(`Test Case 3: Verify that an ad for a QA Automation engineer exists`, async ({ page }) => {

    await dashboardSteps.clickOnAboutBtn();
    const hrefOfCareersBtn: string = await dashboardSteps.hrefOfCareersBtn();
    await dashboardSteps.clickOnCareersBtn();
    await expect(page).toHaveURL(hrefOfCareersBtn);
    expect(await careersSteps.isAdsByTitleVisible(testData.careersPage.adTitleForAQA)).toBeTruthy();
  });
})
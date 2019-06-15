import TEST_ID from './testIDs'

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have welcome screen', async () => {
    await expect(element(by.id(TEST_ID.WELCOME))).toBeVisible()
  })

  it('should have a button on the welcome screen', async () => {
    await expect(element(by.id(TEST_ID.WELCOME_BUTTON))).toBeVisible()
  })

  // it('should have hidden text', async () => {
  //   await expect(element(by.id(TEST_ID.VISIBLE_TEXT))).not.toBeDefined()
  // })

  it('should show text after tapping on button', async () => {
    await element(by.id(TEST_ID.WELCOME_BUTTON)).tap()
    await expect(element(by.id(TEST_ID.VISIBLE_TEXT))).toBeVisible()
  })

  // it('should hide the text after tapping again', async () => {
  //   await element(by.id(TEST_ID.WELCOME_BUTTON)).tap()
  //   await expect(element(by.id(TEST_ID.VISIBLE_TEXT))).not.toBeVisible()
  // })
})

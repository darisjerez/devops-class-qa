import { expect } from 'expect'

export const Given = global.Given
export const Then = global.Then
export const When = global.When

Given('I open the home page', async () => { await browser.url('/') })
Then('the title should contain {string}', async (text) => {
  const title = await browser.getTitle()
  expect(title).toContain(text)
})
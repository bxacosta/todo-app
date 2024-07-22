import {test} from '@playwright/test';

test('test', async ({page}) => {
    await page.goto('http://localhost:5173/');
    await page.getByText('Task 1').isVisible();
});
import {test} from '@playwright/test';

test('test', async ({page}) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('heading', {name: 'Workflow'}).click();
});
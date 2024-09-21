import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://pantip.com/');
    await page.waitForSelector('div.pt-list-item__title > h2 > a.gtm-realtime-link');

    const contents = await page.$$eval(
      'div.pt-list-item__title > h2 > a.gtm-realtime-link',
      links => links.map(link => link.textContent?.trim() || ''),
    );

    await browser.close();
    return NextResponse.json({ titles: contents });
  } catch (error) {
    console.error('Failed to scrape:', error);
    return NextResponse.json({ error: 'Failed to scrape' }, { status: 500 });
  }
}

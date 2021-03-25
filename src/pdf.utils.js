import puppeteer from 'puppeteer';

export async function convertHtmlToPdf(html) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({ format: 'A4', scale: 0.78, printBackground: true });
  await browser.close();

  return pdf;
}

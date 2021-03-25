import handlebars from 'handlebars';
import { readFile, writeFile } from './file.utils.js';
import { ifEven, ifOdd } from './handlebars.utils.js';
import data from './data.js';
import { convertHtmlToPdf } from './pdf.utils.js';


console.log('Reading template file');
const template = readFile('template.hbs');

console.log('Compiling handlebars template');
handlebars.registerHelper('if_even', ifEven);
handlebars.registerHelper('if_odd', ifOdd);
const generateResumeHtml = handlebars.compile(template.toString());

console.log('Populating data fields');
const resumeHtml = generateResumeHtml(data);

console.log('Writing generated HTML to /build');
writeFile('../build/resume.html', resumeHtml);

console.log('Converting HTML to PDF');
const resumePdf = await convertHtmlToPdf(resumeHtml);

try {
  console.log('Writing generated PDF to /build');
  writeFile('../build/resume.pdf', resumePdf);
} catch (error) {
  console.error('Failed to write PDF file, you probably have it opened somewhere.', error);
}

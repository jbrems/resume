import fs from 'fs';

export function readFile(path) {
  return fs.readFileSync(new URL(path, import.meta.url));
}

export function writeFile(path, buffer) {
  return fs.writeFileSync(new URL(path, import.meta.url), buffer);
}

export function getImageAsBas64String(fileName) {
  const image = readFile(`./images/${fileName}`);
  return `data:image/${getFileExtension(fileName)};base64, ${image.toString('base64')}`;
}

function getFileExtension(fileName) {
  return fileName.split('.').pop();
}

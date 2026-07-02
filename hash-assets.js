const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Helper to compute MD5 hash of file content
function getHash(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(content).digest('hex').substring(0, 8);
}

const cssFile = 'style.css';
const jsFile = 'script.js';

if (!fs.existsSync(cssFile) || !fs.existsSync(jsFile)) {
  console.error('Error: Source style.css or script.js not found!');
  process.exit(1);
}

// Get hashes
const cssHash = getHash(cssFile);
const jsHash = getHash(jsFile);

console.log(`CSS Hash: ${cssHash}`);
console.log(`JS Hash: ${jsHash}`);

// Find and delete old hashed files to keep directory clean
const files = fs.readdirSync('.');
files.forEach(file => {
  if (/^style\.[a-f0-9]{8}\.css$/.test(file) && file !== `style.${cssHash}.css`) {
    fs.unlinkSync(file);
    console.log(`Deleted stale CSS file: ${file}`);
  }
  if (/^script\.[a-f0-9]{8}\.js$/.test(file) && file !== `script.${jsHash}.js`) {
    fs.unlinkSync(file);
    console.log(`Deleted stale JS file: ${file}`);
  }
});

// Copy source files to hashed names
const hashedCssFile = `style.${cssHash}.css`;
const hashedJsFile = `script.${jsHash}.js`;

fs.copyFileSync(cssFile, hashedCssFile);
fs.copyFileSync(jsFile, hashedJsFile);
console.log(`Created: ${hashedCssFile}`);
console.log(`Created: ${hashedJsFile}`);

// Update HTML files
const htmlFiles = files.filter(f => f.endsWith('.html'));
htmlFiles.forEach(htmlFile => {
  let content = fs.readFileSync(htmlFile, 'utf8');
  
  // Replace style references
  const cssRegex = /href="style(?:\.[a-f0-9]{8})?\.css"/g;
  content = content.replace(cssRegex, `href="${hashedCssFile}"`);
  
  // Replace script references
  const jsRegex = /src="script(?:\.[a-f0-9]{8})?\.js"/g;
  content = content.replace(jsRegex, `src="${hashedJsFile}"`);
  
  fs.writeFileSync(htmlFile, content, 'utf8');
  console.log(`Updated assets in: ${htmlFile}`);
});

console.log('Content hashing completed successfully!');

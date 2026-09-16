const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

const imageRegex = /(?:\/images\/|\/assets\/)[^"'\s>]+(?:\.png|\.jpg|\.jpeg|\.webp|\.svg)/gi;
const missing = new Set();

walkDir(srcDir, (filePath) => {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.json')) return;
  const content = fs.readFileSync(filePath, 'utf-8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    let imgPath = match[0];
    if (imgPath.startsWith('src="/')) imgPath = imgPath.substring(5);
    
    // Remove query params if any
    imgPath = imgPath.split('?')[0];

    const absolutePath = path.join(publicDir, imgPath);
    if (!fs.existsSync(absolutePath)) {
      missing.add(`${imgPath} (in ${path.relative(srcDir, filePath)})`);
    }
  }
});

console.log("Missing images:");
missing.forEach(m => console.log(m));

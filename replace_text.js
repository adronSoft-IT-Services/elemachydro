const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/products/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all occurrences of "MORIS Italia" with "Elemac Hydro Solutions"
const newContent = content.split('MORIS Italia').join('Elemac Hydro Solutions');

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Replacement complete.');

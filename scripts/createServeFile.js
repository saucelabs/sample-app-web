const { writeFileSync } = require('fs');
const { resolve } = require('path');

const data = {
  'cleanUrls': false
};

writeFileSync(resolve(process.cwd(), 'dist/serve.json'), JSON.stringify(data));

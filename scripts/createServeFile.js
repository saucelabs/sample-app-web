const { writeFileSync } = require('fs');
const { resolve } = require('path');

const data = {
  'cleanUrls': false
};

writeFileSync(resolve(process.cwd(), 'build/serve.json'), JSON.stringify(data));

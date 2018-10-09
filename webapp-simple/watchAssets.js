const shell = require('shelljs');
const fs = require('fs')

fs.watch('public', () => {
  console.log('copied public files')
  shell.cp("-R", "public/", "dist/public/");
})

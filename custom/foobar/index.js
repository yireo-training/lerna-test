#!/usr/bin/env node

const { spawn } = require('child_process');

const args = process.argv.splice(2);

const child = spawn("postcss", args);

child.stdout.on('data', (data) => {
  console.log(`${data}`);
});


child.stderr.on('data', (data) => {
  console.error(`${data}`);
});

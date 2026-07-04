const fs = require('fs');
const path = require('path');

function copyDirectorySync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectorySync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const logger = {
  info: (msg) => console.log(`[INFO] ${msg}`),
  warn: (msg) => console.log(`[WARN] ${msg}`),
  error: (msg, err) => console.error(`\n[ERR]  ${msg}`, err || '', '\n'),
  success: (msg) => console.log(`[DONE] ${msg}\n`),
  header: (msg) => {
    console.log(`\n${msg}`);
    console.log('-'.repeat(40));
  },
  footer: () => console.log('-'.repeat(40))
};

module.exports = {
  copyDirectorySync,
  logger
};

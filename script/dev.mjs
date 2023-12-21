#!/usr/bin/env zx

import path from 'path';
import fs from 'fs';
import { readDirFile } from './util.mjs';
const cwd = process.cwd();

const white = [
  'README.md',
  'dist',
  'package.json',
  'pnpm-lock.yaml',
  'script',
  'src',
  'static',
  'tailwind.css',
  'tsconfig.json',
  'typings.d.ts',
];
readDirFile(
  cwd,
  {
    ignoreConfig: true,
    onFile: async (pathname) => {
      if (pathname.includes('tsconfig.json')) {
        console.log(pathname);
      }
      const name = path.basename(pathname);
      if (white.some((one) => one === name)) {
        return;
      }
      try {
        fs.unlinkSync(pathname);
      } catch (error) {
        console.log(`${pathname} can't unlink`);
      }
    },
    onDir: (pathname) => {
      const name = path.basename(pathname);
      if (white.some((one) => one === name)) {
        return;
      }
      try {
        fs.unlinkSync(pathname);
      } catch (error) {
        console.log(`${pathname} can't unlink`);
      }
    },
  },
  0,
);

await $`TAILWIND_MODE=watch umi dev`;

#!/usr/bin/env zx

import path from 'path'
import fs from 'fs'
import { readDirFile } from './util.mjs'
const cwd = process.cwd()

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
  'typings.d.ts'
]
readDirFile(cwd, {
  ignoreConfig: true,
  onFile:async(pathname) => {
    const name = path.basename(pathname)
    if (white.some(one => one === name)) {
      return
    }
    fs.unlinkSync(pathname)
  },
  onDir:(pathname) => {
    const name = path.basename(pathname)
    if (white.some(one => one === name)) {
      return
    }
    fs.unlinkSync(pathname)
  }
}, 0)

await $`TAILWIND_MODE=watch umi dev`
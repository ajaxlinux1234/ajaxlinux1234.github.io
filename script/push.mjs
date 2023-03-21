#!/usr/bin/env zx
import fs from 'fs'
import path from 'path'

await $`npm run build`
const cwd = process.cwd()
await $`cp ${path.join(cwd, 'dist', 'index.html')} ${cwd}`
const htmlPath = path.join(cwd, 'index.html')
const html = fs.readFileSync(htmlPath, 'utf-8')

fs.writeFileSync(htmlPath, html.replaceAll('<script src="/umi.js"></script>', '<script src="./dist/umi.js"></script>'))

const {stdout: lastCommitInfo} = await $`git log -1 --pretty=%B`

console.log("🚀 ~ file: push.mjs:15 ~ lastCommitInfo:", lastCommitInfo)

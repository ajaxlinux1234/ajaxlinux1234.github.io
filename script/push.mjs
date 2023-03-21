#!/usr/bin/env zx
import path from 'path'

await $`npm run build`
const cwd = process.cwd()
await $`mv ${path.join(cwd, 'dist')} ${cwd}`
const {stdout: lastCommitInfo} = await $`git log -1 --pretty=%B`

await $`git reset --soft HEAD^`
await $`git add -A`
await $`git commit -m ${lastCommitInfo}`
await $`git push`

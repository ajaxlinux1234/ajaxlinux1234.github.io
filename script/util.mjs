#!/usr/bin/env zx
import path from 'path'
import fs from 'fs'

const isTextFile = /.(json|js|ts|css|less|html|htm|tsx|jsx|htm|sass|svg)$/

export function readDirFile(dir, options = {}, level, list = []) {
  if (!fs.existsSync(dir)) {
    return list
  }
  if (typeof level === 'number' && level < 0) {
    return list
  }

  const stat = fs.statSync(dir) // 用来判断是文件还是文件夹
  const files = stat.isDirectory() ? fs.readdirSync(dir) : ['']

  let ignorePath = options.ignorePath || [
    path.resolve(process.cwd(), '.git'),
    path.resolve(process.cwd(), 'node_modules')
  ]
  if (typeof ignorePath === 'string') {
    ignorePath = ignorePath.split(',')
  }
  ignorePath = ignorePath
    .filter((i) => i.trim())
    .map((i) => i.split(path.sep))
    // eslint-disable-next-line no-useless-escape
    .map((i) => i.join('/'))
  files.forEach((filename) => {
    let pathname = path.resolve(dir, filename)
    const stat = fs.statSync(pathname)
    // eslint-disable-next-line no-useless-escape
    pathname = pathname.split(path.sep).join('/')
    const basename = path.basename(pathname)
    const isConfig = basename.startsWith('.') || basename.includes('.config')
    if (
      ignorePath.some((i) => pathname.includes(i))||
      (options.ignoreConfig && isConfig)
    ) {
      return
    }
    if (stat.isDirectory()) {
      const result = typeof options.onDir === 'function' ? options.onDir(pathname) : true
      if (result !== false) {
        readDirFile(pathname, options, typeof level === 'number' ? level - 1 : level, list)
      }
    } else if (stat.isFile()) {
      if (typeof options.onFile === 'function') {
        options.onFile(pathname, {
          isTextFile: !!pathname.match(isTextFile)
        })
      }
      list.push(pathname)
    }
  })
  return
}
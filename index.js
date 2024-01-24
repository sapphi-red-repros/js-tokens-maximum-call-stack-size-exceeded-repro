import jsTokens from 'js-tokens'
import fs from 'node:fs'

const code = fs.readFileSync('./input.js', 'utf-8')
const iterable = jsTokens(code, { jsx: false })
for (const token of iterable) {
  //
}

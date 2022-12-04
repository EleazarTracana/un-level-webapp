import { rmSync } from 'fs'

rmSync('./build', { maxRetries: 10, force: true, recursive: true })
console.log('Deleted build')

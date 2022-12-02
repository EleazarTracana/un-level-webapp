import { writeFileSync } from 'fs'

writeFileSync('./build/.nojekyll', '')
console.log('Created .nojekyll')

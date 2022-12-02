import { execSync } from 'child_process'

// NOTE
// Build repository - not source...

const git_url = 'https://github.com/kenzaflow/un-level.git'

const commands = [
	'cd ./build',
	'git init',
	'git add .',
	`git commit -m "Uploaded by script at ${Date.now()}"`,
	'git branch -M master',
	`git remote add origin ${git_url}`,
	'git push -u origin master -f',
]

process.stdout.write('Subiendo...')

commands.forEach((code) => {
	execSync(code)
})

process.stdout.write(' listo.\n')

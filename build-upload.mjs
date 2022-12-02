import { execSync } from 'child_process'

const git_url = 'https://github.com/kenzaflow/un-level-source.git'

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

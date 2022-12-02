import { useEffect, useState } from 'react'

let informed = false
export default function Debug() {
	if (process.env.NODE_ENV === 'development') {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [debug, setDebug] = useState(false)

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			const root = document.getElementById('root')
			if (!root) return

			debug &&
				!root.classList.contains('debug') &&
				root.classList.add('debug')
			!debug &&
				root.classList.contains('debug') &&
				root.classList.remove('debug')
		}, [debug])

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			const handleDebug = (e: KeyboardEvent) => {
				const keyD = e.key === 'd' || e.key === 'D'
				if (!keyD) return
				const newValue = !debug
				setDebug(newValue)
			}
			window.addEventListener('keydown', handleDebug)

			return () => {
				window.removeEventListener('keydown', handleDebug)
			}
		}, [debug])

		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (!informed) {
				informed = true
				console.info(
					'INFO\nPresioná la tecla D para ver el contorno de todos los elementos.',
				)
			}
		}, [])
	}
	return <></>
}

import { useEffect } from 'react'

export default function Scroll() {
	useEffect(() => {
		const timer = setTimeout(() => {
			const hash = document.location.hash
			if (hash) {
				document.getElementById(hash.substring(1))?.scrollIntoView()
			} else {
				document.getElementById('top')?.scrollIntoView()
			}
		}, 100)
		return () => {
			clearTimeout(timer)
		}
	}, [])
	return <></>
}

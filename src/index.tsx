import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Loader from './layouts/Loader'
const App = React.lazy(() => import('./App'))

const element: HTMLElement = document.getElementById('root')!
const root = ReactDOM.createRoot(element)

root.render(
	<React.StrictMode>
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
	</React.StrictMode>,
)

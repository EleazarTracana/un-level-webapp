import React, { Suspense } from 'react';
import '@fontsource/poppins/latin.css';
import Loader from './layouts/Loader';
import { RouterElement } from './routes';
import LayoutApp from './layouts/App'
import './App.scss'

export default function App() {
	return (
		<Suspense fallback={<Loader />}>
			<LayoutApp>
				<RouterElement />
			</LayoutApp>
		</Suspense>
	)
}

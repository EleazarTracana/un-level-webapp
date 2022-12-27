import React, { Suspense } from 'react';
import '@fontsource/poppins/latin.css';
import Loader from './layouts/Loader';
import { RouterElement } from './routes';
import LayoutApp from './layouts/App'
import './App.scss'
import {CookieConsent, OPTIONS} from "react-cookie-consent";

export default function App() {
	return (
		<Suspense fallback={<Loader />}>
			<CookieConsent
  				 buttonText="Accept"
				 location={OPTIONS.BOTTOM}
  				 buttonStyle={{background: "#762035", color: "white"}}
				 style={{background: "black"}}>
  				This website stores cookies on your computer to provide you a better experience.
			</CookieConsent>	
			<LayoutApp>			
			<RouterElement />
			</LayoutApp>
		</Suspense>
	)
}

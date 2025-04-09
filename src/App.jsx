import { useState } from 'react';

import Home from './pages/Home';
import { useEffect } from 'react';
import MobileRedirect from './components/MobileRedirect';

function App() {

	const [isMobileDevice, setIsMobileDevice] = useState(false)
	const [isLoading, setIsLoading] = useState(true) // Add loading state

	useEffect(() => {
		const checkMobile = () => {
			const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
			setIsMobileDevice(mobile)
			setIsLoading(false)
		}

		checkMobile()
		window.addEventListener('resize', checkMobile)
		return () => window.removeEventListener('resize', checkMobile)
	}, [])

	if (isLoading) {
		return <></>
	}

	return (
		isMobileDevice ? <MobileRedirect /> : (
			<div className='app' >
				<div className='app-container'>
					<Home />
				</div>
			</div>
		)

	)
}

export default App;
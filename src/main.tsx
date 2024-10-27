import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { HomePage } from './home/HomePage'
import './index.scss'
import { ApplicationProvider } from './providers/ApplicationProvider'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ApplicationProvider>
			<HomePage />
		</ApplicationProvider>
	</StrictMode>
)

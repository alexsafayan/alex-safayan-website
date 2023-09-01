import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'
import { Leva } from 'leva'
import { Logo } from '@pmndrs/branding'

createRoot(document.getElementById('root')).render(
    <>
        <App />
        <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
        <Leva collapsed />
    </>
)

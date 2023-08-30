import { createRoot } from 'react-dom/client'
import './style.css'
import { Experience } from './Experience'
import { Leva } from 'leva'
import { Logo } from '@pmndrs/branding'
import { Overlay } from './Overlay'

createRoot(document.getElementById('root')).render(
    <>
        <Experience />
        <Overlay />
        <Leva hidden />
    </>
)

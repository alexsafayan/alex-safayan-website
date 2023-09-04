import { createRoot } from 'react-dom/client'
import './style.css'
import { Experience } from './Experience'
import { ExperienceTest } from './ExperienceTest'
import { Leva } from 'leva'
import { Overlay } from './Overlay'
import { DarkModeProvider } from './DarkModeContext'

createRoot(document.getElementById('root')).render(
    <DarkModeProvider>
        <Experience />
        <Overlay />
        {/* <ExperienceTest /> */}
        <Leva hidden={true} />
    </DarkModeProvider>
)

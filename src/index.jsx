import { createRoot } from 'react-dom/client'
import './style.css'
import { Experience } from './Experience'
import { ExperienceTest } from './ExperienceTest'
import { Leva } from 'leva'
import { Overlay } from './Overlay'
import { ModeProvider } from './DarkModeContext'

createRoot(document.getElementById('root')).render(
    <ModeProvider>
        <Experience />
        <Overlay />
        {/* <ExperienceTest /> */}
        <Leva hidden={true} />
    </ModeProvider>
)

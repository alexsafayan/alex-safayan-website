import { createRoot } from 'react-dom/client'
import './style.css'
import { Experience } from './Experience'
import { ExperienceTest } from './ExperienceTest'
import { Leva } from 'leva'
import { Overlay } from './Overlay'

createRoot(document.getElementById('root')).render(
    <>
        <Experience />
        <Overlay />
        {/* <ExperienceTest /> */}
        <Leva hidden={true} />
    </>
)

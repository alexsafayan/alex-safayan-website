import Time from "./Time";
import Size from "./Size";
import Email from "./Email";
import { useDarkMode } from './DarkModeContext';

export function Overlay()
{
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <div className={`Overlay ${darkMode ? 'dark-mode' : ''}`}>
            <div className="corner top-left">
                <Time />
            </div>
            <div className="corner bottom-left">
                <Size />
            </div>
            <div className="corner top-right">
                <span style={{ cursor: 'pointer', fontSize: '26px' }} onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? '🌞' : '🌒'}
                </span>
            </div>
        </div>
    )
}

import Time from "./Time";
import Size from "./Size";
import Email from "./Email";
import { useModes } from './DarkModeContext';

export function Overlay()
{
    const { darkMode, setDarkMode, editMode, setEditMode } = useModes();

    return (
        <div className={`Overlay ${darkMode ? 'dark-mode' : ''}`}>
            <div className="corner top-left">
                <Time />
            </div>
            <div className="corner bottom-left">
                <Size />
            </div>
            <div className="corner top-right" style={{ cursor: 'pointer', fontSize: '26px' }}>
                <span onClick={() => setEditMode(!editMode)}>
                    {editMode ? '📌' : '📝'}
                </span>
                <span onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? '🌞' : '🌒'}
                </span>
            </div>
        </div>
    )
}

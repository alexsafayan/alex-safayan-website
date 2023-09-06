import Time from "./Time";
import Size from "./Size";

import { useModes } from './DarkModeContext';
import { FiSquare, FiMove, FiSun, FiMoon } from 'react-icons/fi';
import { Instructions } from "./Instructions";

export function Overlay()
{
    const { darkMode, setDarkMode, editMode, setEditMode } = useModes();
    // const isDevelopment = process.env.NODE_ENV === 'development';

    return (
        <div className={`Overlay ${darkMode ? 'dark-mode' : ''}`}>
            <div className="corner top-left">
                <Time />
            </div>
            <div className="corner bottom-left">
                <Size />
            </div>
            <div className="corner bottom">
                <Instructions />
            </div>
            <div className="corner top-right" style={{ cursor: 'pointer', fontSize: '26px' }}>
                <span onClick={() => setEditMode(!editMode)}>
                    {editMode ? <FiSquare size={22} /> : <FiMove size={22} />}
                </span>
                <span onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
                </span>
            </div>
        </div>
    )
}

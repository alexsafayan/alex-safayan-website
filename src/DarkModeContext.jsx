import { createContext, useContext, useState } from 'react';

const ModeContext = createContext();

export const ModeProvider = ({ children }) =>
{
    const [darkMode, setDarkMode] = useState(false);
    const [editMode, setEditMode] = useState(false);

    return (
        <ModeContext.Provider value={{ darkMode, setDarkMode, editMode, setEditMode }}>
            {children}
        </ModeContext.Provider>
    );
};

export const useModes = () =>
{
    const context = useContext(ModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

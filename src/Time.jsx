import React, { useState, useEffect } from 'react';
import { useModes } from './DarkModeContext';

export function Time()
{
    const [time, setTime] = useState(new Date());
    const { setDarkMode } = useModes()

    useEffect(() =>
    {
        const hour = time.getHours();
        if (hour > 18 || hour < 6) {
            console.log('Dark mode on – compliments of the chef.');
            document.body.style.backgroundColor = "black";
            setDarkMode(true)
        }
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    function updateTime()
    {
        setTime(new Date());
    }

    function formatTime(date)
    {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
    }

    return <span>{formatTime(time)}</span>;
}

export default Time;

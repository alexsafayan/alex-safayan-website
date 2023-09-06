import React, { useState, useEffect } from 'react';
import styles from './style.css';

export function Instructions()
{
    const instructions = 'primary drag to orbit • secondary drag to pan • scroll to zoom'
    const [text, setText] = useState(instructions);
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() =>
    {
        setAnimationClass('fadeInOut');
        const fadeOutTimer = setTimeout(() =>
        {
            setAnimationClass('fadeOut');
        }, 8500);  // Start fading out 2.5 seconds after initial render

        const changeTextTimer = setTimeout(() =>
        {
            setText('Made by Alex Safayan');
            setAnimationClass('fadeIn');
        }, 9000);  // Change the text and start fading in after 3 seconds

        return () =>
        {
            clearTimeout(fadeOutTimer);
            clearTimeout(changeTextTimer);
        };
    }, []);

    return (
        <span className={animationClass}>{text}</span>
    );
}

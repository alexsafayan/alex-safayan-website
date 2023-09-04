import React, { useState } from 'react';
import { Html, Edges } from '@react-three/drei';
import { useDarkMode } from './DarkModeContext';

export function Button({ imageUrl, linkUrl, title, position, boxArgs, ...props })
{
    const [isCopied, setIsCopied] = useState(false);
    const email = 'alex@safayan.com'
    const { darkMode } = useDarkMode()

    const copyToClipboard = () =>
    {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email)
                .then(() => setIsCopied(true))
                .catch(error => console.error('Error copying to clipboard:', error));
        } else {
            const textArea = document.createElement('textarea');
            textArea.style.position = 'absolute';
            textArea.value = email;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setIsCopied(true);
        }
        setTimeout(() => { setIsCopied(false) }, 3000)
    };

    const handleClick = () =>
    {
        copyToClipboard();
    };

    const handleTouchStart = () =>
    {
        setIsCopied(false);
    };

    const handleTouchEnd = () =>
    {
        handleClick();
    };

    return (
        <group position={position}>
            <mesh castShadow position-y={boxArgs[1] / 2}>
                <boxGeometry args={boxArgs} />
                <meshStandardMaterial color={darkMode ? '#111' : '#ffffff'} />
                <Edges color={'#666'} />
            </mesh>

            <Html
                transform
                scale={0.309}
                position-y={boxArgs[1]}
                rotation-x={-Math.PI / 2}
            >
                <div className={`ImageWrapper ${darkMode ? 'dark-mode' : ''}`}
                    onClick={handleClick}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    style={{
                        cursor: isCopied ? 'default' : 'copy',
                        userSelect: 'none',
                        fontSize: '40px',
                        textAlign: 'center',
                        padding: '40px 100px',
                        // border: '1px solid red',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                    <span className={`ImageTitle ${darkMode ? 'dark-mode' : ''}`}
                        style={{
                            transform: 'translateX(-80px) translateY(-80px)'
                        }}>{isCopied ? 'Copied!' : 'Copy?'}</span>
                    {email}
                </div>
            </Html>
        </group >
    );
}

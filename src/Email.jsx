import React, { useState } from 'react';

const Email = () =>
{
    const [isCopied, setIsCopied] = useState(false);
    const email = 'alex@safayan.com'

    const copyToClipboard = () =>
    {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email)
                .then(() => setIsCopied(true))
                .catch(error => console.error('Error copying to clipboard:', error));
        } else {
            // Fallback for browsers that do not support navigator.clipboard
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
        <span
            onClick={handleClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
                cursor: isCopied ? 'default' : 'copy',
                userSelect: 'none',
            }}
        >
            {isCopied ? 'Copied!' : email}
        </span>
    );
};

export default Email;

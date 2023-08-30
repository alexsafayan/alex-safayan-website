import React, { useState, useEffect } from 'react';

function Size()
{
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() =>
    {
        function handleResize()
        {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        window.addEventListener('resize', handleResize);

        return () =>
        {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <span>{`${windowSize.width}x${windowSize.height}`}</span>;
}

export default Size;

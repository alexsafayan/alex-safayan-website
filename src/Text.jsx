import { Html } from '@react-three/drei';
import { useEffect, useState } from 'react';

export function Text({ children, fontWeight, fontSize = 16, hidden = false, ...props })
{

    const style = {
        fontWeight: fontWeight || 'normal',
        fontSize: fontSize || 'inherit',
        color: hidden ? 'transparent' : 'inherit',
        userSelect: 'none',
        pointerEvents: 'none !important', // doesn't work??
        background: hidden ? 'transparent' : 'inherit'
    };

    return (
        <Html
            wrapperClass={'noInteract'}
            rotation-x={-Math.PI / 2}
            transform {...props}
        >
            <div
                style={style}
            >
                {children}
            </div>
        </Html>
    );

}

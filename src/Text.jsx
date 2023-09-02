import { Html } from '@react-three/drei';
import { useEffect } from 'react';

export function Text({ children, fontWeight, fontSize = 16, hidden = false, orbitControlsRef, isOrbiting, ...props })
{
    const style = {
        fontWeight: fontWeight || 'normal',
        fontSize: fontSize || 'inherit',
        color: hidden ? 'transparent' : 'inherit',
        userSelect: isOrbiting ? 'none' : 'text',
        background: hidden ? 'transparent' : 'inherit',
        cursor: isOrbiting ? 'inherit' : 'auto',
    };

    console.log("isOrbiting: " + isOrbiting);

    const handleMouseDown = () =>
    {
        if (orbitControlsRef && orbitControlsRef.current) {
            orbitControlsRef.current.enabled = false;
            console.log("orbitControlsRef.current.enabled = false");
        }
        document.addEventListener('mouseup', handleGlobalMouseUp);
    };

    const handleMouseEnter = () =>
    {
        if (orbitControlsRef && orbitControlsRef.current && !isOrbiting) {
            orbitControlsRef.current.enabled = false;
            console.log("orbitControlsRef.current.enabled = false");
        }
    };
    const handleMouseLeave = () =>
    {
        if (orbitControlsRef && orbitControlsRef.current && !isOrbiting) {
            orbitControlsRef.current.enabled = true;
            console.log("orbitControlsRef.current.enabled = true");
        }
    };

    const handleGlobalMouseUp = () =>
    {
        if (orbitControlsRef && orbitControlsRef.current) {
            orbitControlsRef.current.enabled = true;
            console.log("orbitControlsRef.current.enabled = true");
        }
        document.removeEventListener('mouseup', handleGlobalMouseUp); // Clean up the global listener
    };


    useEffect(() =>
    {
        return () =>
        {
            document.removeEventListener('mouseup', handleGlobalMouseUp); // Ensure we don't leave any lingering global listeners
            if (orbitControlsRef && orbitControlsRef.current) {
                orbitControlsRef.current.enabled = true; // Ensure it's re-enabled when the component is unmounted
            }
        };
    }, [orbitControlsRef]);

    return (
        <Html rotation-x={-Math.PI / 2} transform {...props}>
            <div
                style={style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
            >
                {children}
            </div>
        </Html>
    );

}

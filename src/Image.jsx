import { DoubleSide } from 'three';
import { useTexture } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/three'

export function Image({ imageUrl, linkUrl, ...props })
{
    const texture = useTexture(imageUrl)
    const meshRef = useRef()

    // 1. Set up state for button pressed
    const [pressed, setPressed] = useState(false);

    // 2. Use the useSpring hook
    const springProps = useSpring({
        positionY: pressed ? -0.95 : -0.8 // pushing down by -0.2 units when pressed
    });

    return (
        <>
            <animated.mesh
                ref={meshRef}
                position-y={springProps.positionY} // 3. Update mesh position using animated values
                castShadow
                rotation={[Math.PI / 2, 0, Math.PI]}
                onPointerDown={() => setPressed(true)} // 4. Event listener for pressing
                onPointerUp={() =>
                {
                    setPressed(false);
                    window.open(linkUrl, "_blank");  // Open link in a new tab
                }}
                {...props}
            >
                <planeBufferGeometry attach="geometry" args={[5, 5]} />
                <meshBasicMaterial map={texture} side={DoubleSide} />
            </animated.mesh>
        </>
    );
}

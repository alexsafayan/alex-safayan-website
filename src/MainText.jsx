import { RGBELoader } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three'
import
{
    Center,
    Text3D, MeshTransmissionMaterial
} from '@react-three/drei';
import { useState } from 'react';
import { Mesh } from 'three';

export function MainText({ children, config, font = '/Inter_Medium_Regular.json', ...props })
{
    // const [active, setActive] = useState(false)

    // const texture = useLoader(RGBELoader, './poly_haven_studio_1k.hdr');
    return (
        <>
            <group>
                <Center scale={0.5} front top {...props}>
                    <Text3D
                        castShadow
                        bevelEnabled
                        font={font}
                        scale={5}
                        letterSpacing={-0.03}
                        height={0.25}
                        bevelSize={0.01}
                        bevelSegments={10}
                        curveSegments={128}
                        bevelThickness={0.01}>
                        {children}
                        <MeshTransmissionMaterial {...config} />
                    </Text3D>
                </Center>
            </group>
        </>
    );
}
import { RGBELoader } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three'
import
{
    Center,
    Text3D,
    MeshTransmissionMaterial,
    useGLTF
} from '@react-three/drei';
import { useState } from 'react';
import { Mesh } from 'three';

export function MainText2({ children, config, font = '/Inter_Medium_Regular.json', ...props })
{
    const texture = useLoader(RGBELoader, './poly_haven_studio_1k.hdr');

    const { nodes } = useGLTF('./alex-safayan.glb')

    return (
        <>
            <group>
                <Center scale={0.5} front top {...props}>

                    <mesh castShadow rotation={[Math.PI / 2, 0, 0]} scale={10} position={[0, 10, 0]} geometry={nodes['Alex-Safayan'].geometry}>
                        <MeshTransmissionMaterial {...config} background={texture} />
                    </mesh>
                </Center>
            </group>
        </>
    );
}

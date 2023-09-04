import { Html, Edges, MeshWobbleMaterial } from '@react-three/drei';

export function Box({ key, position, boxArgs, ...props })
{
    return <mesh key={key} position={position} position-y={boxArgs[1] / 2 - 1}>
        <boxGeometry args={boxArgs} />
        <meshStandardMaterial
            color="white"
            transparent
            opacity={0.5}
        />
        {/* <Edges color={'#666'} /> */}
    </mesh>
}

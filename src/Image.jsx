import { Html, Edges } from '@react-three/drei';

export function Image({ imageUrl, linkUrl, title, position, boxArgs, ...props })
{
    return <group position={position}>
        <mesh castShadow position-y={boxArgs[1] / 2}>
            <boxGeometry args={boxArgs} />
            <meshStandardMaterial color={'#ffffff'} />
            <Edges color={'#666'} />
        </mesh>
        <Html
            transform
            scale={0.309}
            position-y={boxArgs[1]}
            rotation-x={-Math.PI / 2}
        >
            <div className="ImageWrapper">
                <span className="ImageTitle">{title}</span>
                <div className="ImageCropper">
                    <a target='_blank' href={linkUrl}><img className={'Image'} src={imageUrl} /></a>
                </div>
            </div>
        </Html>
    </group>
}

import { Html, Edges, PivotControls } from '@react-three/drei';
import { useModes } from './DarkModeContext';
import { MyPivotControls } from './MyPivotControls'

export function Image({ imageUrl, linkUrl, title, position, boxArgs, ...props })
{
    const { darkMode, editMode } = useModes()


    return <MyPivotControls><group position={position}>
        <mesh castShadow position-y={boxArgs[1] / 2}>
            <boxGeometry args={boxArgs} />
            <meshStandardMaterial color={darkMode ? '#111' : '#ffffff'} />
            <Edges color={darkMode ? '#ccc' : '#666'} />
        </mesh>
        {!editMode && <Html
            transform
            scale={0.309}
            position-y={boxArgs[1]}
            rotation-x={-Math.PI / 2}
        >
            <div className={`ImageWrapper`}>
                <span className={`ImageTitle ${darkMode ? 'dark-mode' : ''}`}>{title}</span>
                <div className="ImageCropper">
                    <a target='_blank' href={linkUrl}><img className={'Image'} src={imageUrl} alt={title} /></a>
                </div>
            </div>
        </Html>}
    </group></MyPivotControls >
}

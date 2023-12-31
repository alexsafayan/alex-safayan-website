import
{
    Instance,
    Instances,
} from '@react-three/drei'
import { useModes } from './DarkModeContext'

// Renders a grid and crosses as instances
export const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) =>
{
    const { darkMode } = useModes()
    return (
        <Instances position={[0, -1.02, 0]}>
            <planeGeometry args={[lineWidth, height]} />
            <meshBasicMaterial color={darkMode ? '#404040' : "#999"} />
            {Array.from({ length: number }, (_, y) =>
                Array.from({ length: number }, (_, x) => (
                    <group key={x + ':' + y} position={[x * 2 - Math.floor(number / 2) * 2, -0.01, y * 2 - Math.floor(number / 2) * 2]}>
                        <Instance rotation={[-Math.PI / 2, 0, 0]} />
                        <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
                    </group>
                ))
            )}
            <gridHelper args={[100, 100, darkMode ? '#333' : "#bbb", darkMode ? '#333' : "#bbb"]} position={[0, -0.01, 0]} />
        </Instances>
    )
}
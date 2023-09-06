import { PivotControls } from '@react-three/drei';
import { useModes } from './DarkModeContext';

export function MyPivotControls({ children })
{
    const { darkMode, editMode } = useModes()
    return <PivotControls activeAxes={[true, false, true]} scale={100} lineWidth={6} fixed castShadow={false} visible={editMode} anchor={[-1, 0, -1]} depthTest={false}>
        {children}
    </PivotControls>
}

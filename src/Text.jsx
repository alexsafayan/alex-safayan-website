import { Html } from '@react-three/drei';
import { useModes } from './DarkModeContext';

export function Text({ children, fontWeight, fontSize = 16, hidden = false, ...props })
{
    const { darkMode, editMode } = useModes()

    const style = {
        fontWeight: fontWeight || 'normal',
        fontSize: fontSize || 'inherit',
        color: hidden ? 'transparent' : darkMode ? 'white' : 'black',
        userSelect: 'none',
        pointerEvents: 'none !important', // doesn't work??
        background: hidden ? 'transparent' : 'inherit'
    };

    return (
        !editMode && (
            <Html
                wrapper="div"
                className="noInteract"
                transform
                rotation-x={-Math.PI / 2}
                {...props}
            >
                <div style={style}>{children}</div>
            </Html>
        )
    );

}

import { Html } from '@react-three/drei'

export function Text({ children, fontWeight, fontSize = 20, hidden = false, ...props })
{
    const style = {
        fontWeight: fontWeight || 'normal',
        fontSize: fontSize || 'inherit',
        color: hidden ? 'transparent' : 'inherit',  // Set text color to transparent if hidden
        userSelect: 'text', // Ensure the text is selectable
        background: hidden ? 'transparent' : 'inherit',  // Optional: Set background to transparent if hidden
    };

    return (
        <Html rotation-x={-Math.PI / 2} transform {...props}>
            <div style={style}>{children}</div>
        </Html>
    );
}

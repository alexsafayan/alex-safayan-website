import Time from "./Time";
import Size from "./Size";
import Email from "./Email";

export function Overlay()
{
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px', pointerEvents: 'all' }}>
                <Time />
            </div>
            <div style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px', pointerEvents: 'all' }}>
                <Size />
            </div>
            <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px', pointerEvents: 'all' }}>
                <Email />
            </div>
        </div>
    )
}
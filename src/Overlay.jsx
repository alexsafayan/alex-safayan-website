import Time from "./Time";
import Size from "./Size";
import Email from "./Email";

export function Overlay()
{
    return (
        <div className="Overlay">
            <div className="corner top-left">
                <Time />
            </div>
            <div className="corner bottom-left">
                <Size />
            </div>
            <div className="corner top-right">
                <Email />
            </div>
        </div>
    )
}
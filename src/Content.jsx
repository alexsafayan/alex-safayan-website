import { useRef, useState } from "react"
import { OrbitControls } from "@react-three/drei"
import { Text } from './Text'

export function HTMLContent({ canvasRef })
{
    const orbitRef = useRef()
    const [isOrbiting, setIsOrbiting] = useState(false)

    canvasRef.current.style.cursor = isOrbiting ? 'grabbing' : 'grab';

    return <>
        <Text isOrbiting={isOrbiting} orbitControlsRef={orbitRef} fontWeight={"Bold"} fontSize={80} position={[0, -1, -1]} hidden={true}>Alex Safayan</Text>

        <Text isOrbiting={isOrbiting} orbitControlsRef={orbitRef} position={[0, -1, 1]}>CS Student at Northwestern University</Text>

        <OrbitControls
            enableZoom
            maxZoom={160}
            minZoom={40}
            enablePan={false}
            dampingFactor={0.05}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 3}
            makeDefault
            ref={orbitRef}
            onStart={() => { setIsOrbiting(true) }}
            onEnd={() => { setIsOrbiting(false) }}
        />
    </>
}
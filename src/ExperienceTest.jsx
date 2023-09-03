import { Canvas } from '@react-three/fiber'
import
{
    OrbitControls,
    GizmoHelper,
    GizmoViewport,
} from '@react-three/drei'


export function ExperienceTest()
{
    return (
        <Canvas orthographic camera={{ zoom: 60 }}>
            <OrbitControls
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 3}
                makeDefault
            />

            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>

            <GizmoHelper alignment="bottom-right" margin={[64, 64]}>
                <GizmoViewport labelColor="white" axisHeadScale={1} />
            </GizmoHelper>
        </Canvas >
    )
}
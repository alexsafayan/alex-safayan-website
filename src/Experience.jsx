import { Canvas } from '@react-three/fiber'
import
{
    Environment,
    Lightformer,
    OrbitControls,
    RandomizedLight,
    AccumulativeShadows,
    GizmoHelper,
    GizmoViewport
} from '@react-three/drei'
import { useControls } from 'leva'
import { EffectComposer, HueSaturation, BrightnessContrast } from '@react-three/postprocessing'
import { useSpring, animated } from '@react-spring/three'
import { useRef, Suspense, useState } from 'react'
import { MainText } from './MainText'
import { MainText2 } from './MainText2'
import { Grid } from './Grid'
import { MyCamera } from './MyCamera'
import { HTMLContent } from './Content'
import { Perf } from 'r3f-perf'

export function Experience()
{
    const backsideThickness = 0.3;
    const { autoRotate, text, shadow, position, ...config } = useControls({
        backside: true,
        position: { value: [0, 20, 8] },
        backsideThickness: { value: 0.6, min: 0, max: 2 },
        samples: { value: 16, min: 1, max: 32, step: 1 },
        resolution: { value: 1024, min: 64, max: 2048, step: 64 },
        transmission: { value: 1, min: 0, max: 1 },
        clearcoat: { value: 0, min: 0.1, max: 1 },
        clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
        thickness: { value: 0.3, min: 0, max: 5 },
        chromaticAberration: { value: 5, min: 0, max: 5 },
        anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
        roughness: { value: 0, min: 0, max: 1, step: 0.01 },
        distortion: { value: 0.5, min: 0, max: 4, step: 0.01 },
        distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
        temporalDistortion: { value: 0.05, min: 0, max: 1, step: 0.01 },
        ior: { value: 1.5, min: 0, max: 2, step: 0.01 },
        color: '#ff9cf5',
        gColor: '#ff7eb3',
        shadow: '#750d57',
    })

    const canvasRef = useRef();

    return (
        <Canvas ref={canvasRef} style={{
            cursor: 'grab'
        }} shadows orthographic camera={{ position: position, zoom: 60 }}>
            <MyCamera />
            {/* <Perf /> */}

            <color attach="background" args={['#f2f2f5']} />

            <Suspense fallback={null}>
                <MainText scale={[0.3, 0.3, 0.25]} config={config} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0.25]}>
                    Alex Safayan
                </MainText>
                <AccumulativeShadows frames={100} color={shadow} colorBlend={5} toneMapped={true} alphaTest={0.9} opacity={0.95} scale={30} position={[0, -1.01, 0]}>
                    <RandomizedLight amount={4} radius={10} ambient={0.5} intensity={1} position={[0, 10, -10]} size={15} mapSize={1024} bias={0.0001} />
                </AccumulativeShadows>
            </Suspense>

            <HTMLContent />

            <Grid />

            <OrbitControls
                enableZoom
                maxZoom={200}
                minZoom={40}
                enablePan={false}
                dampingFactor={0.05}
                minPolarAngle={-1}
                maxPolarAngle={Math.PI / 3}
                makeDefault
                onStart={() => { canvasRef.current.style.cursor = 'grabbing' }}
                onEnd={() => { console.log("onEnd"); canvasRef.current.style.cursor = 'grab' }}
            />



            {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
            <Environment resolution={32}>
                <group rotation={[-Math.PI / 4, -0.3, 0]}>
                    <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                    <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
                    <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
                    <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
                    <Lightformer type="ring" intensity={2} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />
                </group>
            </Environment>
            {/** Soft shadows */}

            <GizmoHelper alignment="bottom-right" margin={[64, 64]}>
                <GizmoViewport labelColor="white" axisHeadScale={1} />
            </GizmoHelper>
        </Canvas >
    )
}

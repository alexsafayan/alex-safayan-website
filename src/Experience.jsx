import React from 'react';
import { Camera, DoubleSide } from 'three'
import { Canvas } from '@react-three/fiber'
import
{
    Environment,
    Lightformer,
    OrbitControls,
    RandomizedLight,
    AccumulativeShadows,
    Html
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
import { Image } from './Image'
import { Setup } from './Setup'
import { Text } from './Text'
import { GizmoHelper } from './GizmoHelper.tsx'
import { GizmoViewport } from './GizmoViewport.tsx'
import { Socials } from './Socials'
import { useDarkMode } from './DarkModeContext';


export function Experience()
{
    const MemoizedShadows = React.memo(AccumulativeShadows);
    const MemoizedLight = React.memo(RandomizedLight);
    const { darkMode } = useDarkMode()
    const backsideThickness = 0.3
    const { autoRotate, text, shadow, position, positionn, ...config } = useControls({
        positionn: { value: [0, -0.5, 8] },
        backside: true,
        position: { value: [0, 20, 0] },
        backsideThickness: { value: 0.6, min: 0, max: 2 },
        samples: { value: 2, min: 1, max: 32, step: 1 },
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
        <Canvas ref={canvasRef} style={{ cursor: 'grab' }} shadows orthographic camera={{ position: position, zoom: 60 }}>
            <Suspense>
                <MyCamera />
                {/* <Setup /> MAKE TEXT LOOK BAD */}
                {/* <Perf /> */}
                <color attach="background" args={[darkMode ? '#000000' : '#f2f2f5']} />

                <MainText scale={[0.3, 0.3, 0.25]} config={config} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0.25]}>
                    Alex Safayan
                </MainText>

                <Text darkMode={darkMode} fontWeight={"Bold"} fontSize={80} position={[0, -1, -1]} hidden={true}>Alex Safayan</Text>

                <Text darkMode={darkMode} position={[0, -1, 1]}>CS + math @ Northwestern University</Text>

                <Image
                    title='Google World'
                    imageUrl={'./images/ggl.webp'}
                    linkUrl={'https://www.behance.net/gallery/68891831/Google-World'}
                    position={[-3, -1, -4]}
                    boxArgs={[2, 0.25, 2]}
                />

                <Image
                    title='Pfizer HemHorizon'
                    imageUrl={'./images/pfizer.webp'}
                    linkUrl={'https://www.behance.net/gallery/160025489/Pfizer-HemHorizon'}
                    position={[-6.5, -1, 2]}
                    boxArgs={[3, 0.5, 2]}
                />

                <Image
                    title='Transfer update'
                    imageUrl={'./images/n-yes.webp'}
                    linkUrl={'https://www.linkedin.com/posts/alexsafayan_i-am-thrilled-to-share-that-i-will-be-transferring-activity-7091842262875205632-5qWk/'}
                    position={[1, -1, -5]}
                    boxArgs={[2, 0.5, 2]}
                />

                <Image
                    title='Resume'
                    imageUrl={'./images/resume.webp'}
                    linkUrl={'https://read.cv/alexsafayan'}
                    position={[5, -1, -3.5]}
                    boxArgs={[2, 0.25, 3]}
                />

                <Image
                    title='Rooms – by Things, Inc.'
                    imageUrl={'./images/rooms.webp'}
                    linkUrl={'https://rooms.xyz'}
                    position={[6.5, -1, 2]}
                    boxArgs={[3, 0.25, 2]}
                />

                <Socials />

                <Grid />

                <OrbitControls
                    makeDefault
                    enableZoom
                    maxZoom={200}
                    minZoom={40}
                    enablePan={true}
                    dampingFactor={0.05}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 3}
                    onStart={() => { canvasRef.current.style.cursor = 'grabbing' }}
                    onEnd={() => { canvasRef.current.style.cursor = 'grab' }}
                />

                <Environment background={false} resolution={32}>
                    <group rotation={[-Math.PI / 4, -0.3, 0]}>
                        <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
                        <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
                        <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
                        <Lightformer type="ring" intensity={2} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />

                        <Lightformer intensity={10} rotation-x={0} position={[0, 2, 15]} scale={[10, 10, 1]} />
                    </group>
                </Environment>

                {/* BUG: Whenever the darkMode state updates, we rerender these shadows, causing a frame drop. */}
                {!darkMode && <AccumulativeShadows temporal frames={90} color={shadow} colorBlend={5} toneMapped={true} alphaTest={0.9} opacity={0.95} scale={17} position={[0, -1.01, 0]}>
                    <RandomizedLight amount={4} radius={10} ambient={0.5} intensity={1} position={[0, 10, -10]} size={15} mapSize={1024} bias={0.0001} />
                </AccumulativeShadows>}

                <GizmoHelper alignment="bottom-right" margin={[64, 64]}>
                    <GizmoViewport labelColor="white" axisHeadScale={1} />
                </GizmoHelper>
            </Suspense>
        </Canvas >
    )
}

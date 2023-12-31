import { RGBELoader } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three'
import
{
    Center,
    Text3D,
    MeshTransmissionMaterial,
} from '@react-three/drei';
import { useModes } from './DarkModeContext';
import { MyPivotControls } from './MyPivotControls';

export function MainText({ children, config, font = '/Inter_Medium_Regular.json', ...props })
{
    const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/st_fagans_interior_1k.hdr')
    const { darkMode, editMode } = useModes()

    return (
        <MyPivotControls>
            <group>
                <Center scale={0.5} front top {...props}>
                    <Text3D
                        castShadow
                        bevelEnabled
                        font={font}
                        scale={5}
                        letterSpacing={-0.03}
                        height={0.25}
                        bevelSize={0.01}
                        bevelSegments={10}
                        curveSegments={128}
                        bevelThickness={0.01}>
                        {children}
                        <MeshTransmissionMaterial {...config} background={texture} />
                    </Text3D>
                </Center>
            </group>
        </MyPivotControls>
    );
}

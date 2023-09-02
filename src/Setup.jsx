import { useThree } from '@react-three/fiber';
import { sRGBEncoding, LinearToneMapping } from 'three';

export function Setup()
{
    const { gl, camera } = useThree();

    // Setting up the gamma correction
    gl.toneMapping = LinearToneMapping;
    gl.outputEncoding = sRGBEncoding;

    // Ensure the camera uses linear encoding
    camera.outputEncoding = sRGBEncoding;

    return null;
}

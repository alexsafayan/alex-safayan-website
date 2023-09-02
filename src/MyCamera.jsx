import React, { useEffect } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrthographicCamera } from 'three'

export const MyCamera = () =>
{
    const { camera, size } = useThree()

    // Given width of the view
    const viewWidth = Math.max(800, size.width)
    const viewHeight = Math.max(viewWidth, size.width) * (size.height / size.width)

    useEffect(() =>
    {
        if (camera instanceof OrthographicCamera) {
            camera.left = -viewWidth / 2
            camera.right = viewWidth / 2
            camera.top = viewHeight / 2
            camera.bottom = -viewHeight / 2
            camera.updateProjectionMatrix()

            console.log("viewWidth: " + viewWidth);
            console.log("viewHeight: " + viewHeight);
            console.log("size.width: " + size.width);
            console.log("size.height: " + size.height);
        }
    }, [camera, viewWidth, viewHeight])

    return null
}

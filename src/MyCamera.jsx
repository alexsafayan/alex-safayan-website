import React, { useEffect } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrthographicCamera } from 'three'

export const MyCamera = () =>
{
    const { camera, size } = useThree()

    // Given width of the view
    const viewWidth = 1100
    const viewHeight = viewWidth * (size.height / size.width)

    useEffect(() =>
    {
        if (camera instanceof OrthographicCamera) {
            camera.left = -viewWidth / 2
            camera.right = viewWidth / 2
            camera.top = viewHeight / 2
            camera.bottom = -viewHeight / 2
            camera.updateProjectionMatrix()
        }
    }, [camera, viewWidth, viewHeight])

    return null
}

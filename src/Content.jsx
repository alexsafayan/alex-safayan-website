import { useRef, useState } from "react"
import { OrbitControls } from "@react-three/drei"
import { Text } from './Text'

export function HTMLContent()
{

    return <>
        <Text fontWeight={"Bold"} fontSize={80} position={[0, -1, -1]} hidden={true}>Alex Safayan</Text>

        <Text position={[0, -1, 1]}>CS Student at Northwestern University</Text>
    </>
}
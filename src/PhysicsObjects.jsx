import { usePlane, useBox } from '@react-three/cannon'
import { Vector3 } from 'three'
import { useThree } from "@react-three/fiber";

export function Plane(props)
{
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
        <mesh receiveShadow ref={ref}>
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color="red" transparent opacity={0} />
        </mesh>
    )
}

export function Cube(props)
{
    const [ref, api] = useBox(() => ({ rotation: [0.5, 1, 0.2], mass: 1, ...props }));
    const { camera } = useThree(); // get the camera from the react-three-fiber context

    const handleClick = (event) =>
    {
        // Calculate the direction from the camera to the cube
        const direction = new Vector3().subVectors(ref.current.position, camera.position).normalize();

        // Here, I'm scaling the direction vector to set the force magnitude.
        // You can adjust the scalar value (500 in this case) to increase or decrease the force magnitude.
        const force = direction.multiplyScalar(250);

        api.applyForce([force.x, force.y + 50, force.z], [0, 0, 0]);
    };

    return (
        <mesh castShadow ref={ref} onClick={(event) => handleClick(event)}>
            <boxGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}
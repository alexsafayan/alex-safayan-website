import { Box } from './Box';

export function Boxes()
{
    const boxes = [
        { position: [0, -1, -10], boxArgs: [4, 2, 4] },
        { position: [-6.5, -1, -6], boxArgs: [1, 2, 2] },
        { position: [8, -1, 6], boxArgs: [4, 1, 1] },
        { position: [3, -1, 8], boxArgs: [2, 2, 2] },
        { position: [-8.5, -1, 8], boxArgs: [3, 3, 3] },
        { position: [10, -1, -12], boxArgs: [2, 3, 2] },
        { position: [9, -1, -9], boxArgs: [1, 1, 1] },
        { position: [12, -1, 10], boxArgs: [5, 2, 4] },
        { position: [-9, -1, 10], boxArgs: [3, 1, 3] },
        { position: [-10, -1, -9], boxArgs: [4, 2, 1] },
        // Add more boxes here...
    ];




    return (
        <>
            {boxes.map((box, index) => (
                <Box key={index} position={box.position} boxArgs={box.boxArgs} />
            ))}
        </>
    );
}
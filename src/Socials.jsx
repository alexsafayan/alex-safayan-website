import { Button } from "./Button";
import { Image } from "./Image";

export function Socials()
{
    const socialButtons = [
        {
            title: 'Linkedin',
            imageUrl: './images/linkedin.png',
            linkUrl: 'https://www.linkedin.com/in/alexsafayan/',
        },
        {
            title: 'Twitter',
            imageUrl: './images/twitter.png',
            linkUrl: 'https://www.twitter.com/alexsafayan/',
        },
        {
            title: 'Dribbble',
            imageUrl: './images/dribbble.png',
            linkUrl: 'https://www.dribbble.com/alexsafayan/',
        },
        {
            title: 'Github',
            imageUrl: './images/github.png',
            linkUrl: 'https://www.github.com/alexsafayan/',
        },
    ];

    return <>
        {socialButtons.map((el, i) =>
            <Image
                key={i}
                title={el.title}
                imageUrl={el.imageUrl}
                linkUrl={el.linkUrl}
                position={[-1.5 + i, -1, 2.5]}
                boxArgs={[1, 0.25, 1]}
            />
        )}
        <Button
            title={'Copy?'}
            position={[0, -1, 3.5]}
            boxArgs={[4, 0.5, 1]}
        />
    </>
}
import {
    FilmIcon,
    PlayIcon,
    Squares2X2Icon,
} from '@heroicons/react/24/outline'



export default function Projects(){
    const projects =
        [
                {
                    title: 'GoMove 💪🏽',
                    description: 'Built using React, Postgres, ',
                    href: 'https://protected-bastion-78122.herokuapp.com/#/home',
                    image: '/images/GoMoveProject.png',
                    icon: Squares2X2Icon,
                },
                {
                    title: 'Cactus Mayhem 🤠🌵',
                    description: 'Game using JavaScript, HTML, &  CSS!',
                    href: 'https://cactus-mayhem.herokuapp.com/',
                    image: '/images/CactusMayhemProject.png',
                    icon: PlayIcon,
                },
                {
                    title: 'The Collection 🎬',
                    description: 'Hire fantastic developers and UX designers!',
                    href: 'https://obscure-fortress-88731.herokuapp.com/#/',
                    image: '/images/TheCollectionProject.png',
                    icon: FilmIcon,
                }
        ]
    return projects;
}
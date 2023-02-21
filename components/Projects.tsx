import React from "react";
import ProjectDisplays from "./ProjectDisplay"
import {
    FilmIcon,
    PlayIcon,
    Squares2X2Icon,
} from '@heroicons/react/24/outline';

import { HiArchive } from "react-icons/hi";



// brings in array of projects from component.


export default function Projects(){
    const projects =
        [
                {
                    title: 'GoMove 💪🏽',
                    description: 'Built using React, Postgres, express and much more',
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
                    description: 'Collection of Movie for private database!',
                    href: 'https://obscure-fortress-88731.herokuapp.com/#/',
                    image: '/images/TheCollectionProject.png',
                    icon: FilmIcon,
                },
                {
                    title: 'MN Women\'s Press',
                    description: 'Content & Contact Manager: Use \"Guest\" as username & password!',
                    href: 'https://mnwomenpress-prototype.herokuapp.com/#/login',
                    image: '/images/Screen Shot 2023-02-21 at 11.48.26 AM.png',
                    icon: HiArchive,
                }
        ]


    return(
        <div id='projects' className={`mb-24 text-lg`}>
            <h4 className='font-semibold  text-white leading-tight tracking-tighter md:text-4l text-6xl flex justify-center'>
                From
                <div className="z-1 drop-shadow-lg shadow-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500 ">
                &nbsp;idea&nbsp;
                </div>
                to
                <div className="z-1 drop-shadow-lg shadow-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                &nbsp;product&nbsp;
                </div>
                to
                <div className="z-1 drop-shadow-lg shadow-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-800 ">
                &nbsp;consumer
                </div>
                .  
            </h4>
            <h4 className='flex justify-center text-l tracking-tightly decoration-1 font-light text-zinc-300 mb-8'>
            Projects
            </h4>
            <div className="">
                {projects.length > 0 && <ProjectDisplays projects={projects} />}
            </div>
        </div>
    )
}
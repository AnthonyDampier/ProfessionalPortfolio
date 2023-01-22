import ProjectDisplays from "./ProjectDisplay"

// brings in array of projects from component.
import {projects} from "./ProjectsArray";

export default function(){

    // const projects = [
    //     {
    //         title: 'GoMove 💪🏽',
    //         description: 'Built using React, Postgres, ',
    //         href: 'https://protected-bastion-78122.herokuapp.com/#/home',
    //         image: '../images/GoMoveProject.png',
    //     },
    //     {
    //         title: 'Cactus Mayhem 🤠🌵',
    //         description: 'Game using JavaScript, HTML, &  CSS!',
    //         href: 'https://cactus-mayhem.herokuapp.com/',
    //         image: '../images/CactusMayhemProject.png',
    //     },
    //     {
    //         title: 'The Collection 🎬',
    //         description: 'Hire fantastic developers and UX designers!',
    //         href: 'https://obscure-fortress-88731.herokuapp.com/#/',
    //         image: '../images/TheCollectionProject.png',
    //     },
    // ]



    return(
        <div id='projects' className={`mb-24 text-lg`}>
            <h4 className='font-semibold  text-white leading-tight tracking-tighter md:text-4l text-6xl mb-20 flex justify-center'>
                From
                <div className="z-10 drop-shadow-lg shadow-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500 ">
                &nbsp;idea&nbsp;
                </div>
                to
                <div className="z-10 drop-shadow-lg shadow-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                &nbsp;product&nbsp;
                </div>
                to
                <div className="z-10 drop-shadow-lg shadow-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-800 ">
                &nbsp;consumer
                </div>
                .  
            </h4>
            <div className="">
                {projects?.length > 0 && <ProjectDisplays projects={projects} />}
            </div>
        </div>
        

    )
}
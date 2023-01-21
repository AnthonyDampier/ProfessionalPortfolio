import ProjectDisplays from "./ProjectDisplay"

export default function(){

    const projects = [
        {
            title: 'GoMove',
            description: 'Built using React, Postgres, ',
            href: '#',
            image: '',
        },
        {
            title: 'Cactus Mayhem',
            description: 'Connect and create new opportunities!',
            href: '#',
            image: '',
        },
        {
            title: 'The Collection',
            description: 'Hire fantastic developers and UX designers!',
            href: '#',
            image: '',
        },
    ]



    return(
        <div className={`mt-20 mb-12 text-center text-lg md:pl-0 md:text-left`}>
            <h4 className='font-semibold  text-white leading-tight tracking-tighter md:text-4l text-6xl mb-40 flex justify-center'>
                From
                <div className="z-10 drop-shadow-lg shadow-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500 ">
                &nbsp;idea&nbsp;
                </div>
                to
                <div className="z-10 drop-shadow-lg shadow-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 ">
                &nbsp;products&nbsp;
                </div>
                to
                <div className="z-10 drop-shadow-lg shadow-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-800 ">
                &nbsp;consumers
                </div>
                .  
            </h4>
            {projects?.length > 0 && <ProjectDisplays projects={projects} />}
        </div>
        

    )
}
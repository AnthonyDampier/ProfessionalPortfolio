import Image from "next/image";
import Resume from "./Resume";
import TechnologyKnowledge from "./TechnologyKnowledge";

export default function About(){
    return(
        <section className={`mt-24 mb-36 text-center text-lg`}>
            <Image 
                className='h-64 w-64 mx-auto my-12 object-fit object-fit drop-shadow-lg  shadow-black rounded-full
                ' 
                src={'/images/profile.png'}
                width={2000}
                height={2000}
                alt={`Cover Image of Anthony Dampier`}
            />
            <h4 className='drop-shadow-lg shadow-black text-zinc-400 leading-tight tracking-tighter text-2xl mb-1 flex justify-center'>
                Project Manager / Product Owner / Developer / Consultant
            </h4>
            <h4 className='font-semibold mt-5 text-white leading-tight tracking-tighter lg:text-6xl md:text-2xl sm:text-3xl text-2xl flex justify-center h-16'>
                Turning 
                <div className="z-1  drop-shadow-lg shadow-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-pink-600">
                &nbsp;ideas&nbsp;
                </div>
                into real life
                <div className="z-1 drop-shadow-lg shadow-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                &nbsp;products&nbsp;
                </div>
                is my calling.  
            </h4>
            {/* <TechnologyKnowledge/> */}
            <Resume/>
        </section>
        

    )
}
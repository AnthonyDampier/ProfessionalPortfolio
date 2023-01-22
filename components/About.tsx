import Resume from "./Resume";
import TechnologyKnowledge from "./TechnologyKnowledge";

export default function About(){
    return(
        <section className={`mt-24 mb-24 text-center text-lg`}>
            <h1 className='drop-shadow-lg shadow-black font-bold text-white leading-tight tracking-tighter text-3xl md:text-4xl sm:text-3xl mb-1 flex justify-center'>
                Hi, I&apos;m Anthony Dampier.
            </h1>
            <h4 className='drop-shadow-lg shadow-black text-zinc-400 leading-tight tracking-tighter text-2xl mb-1 flex justify-center'>
                Full Stack Web Developer  
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
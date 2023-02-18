
export default function Resume(){
    return(
        
            <button className="group relative overflow-hidden bg-white shadow-slate-800 shadow-small">
                <a 
                href="../Resume/Anthony_Dampier-Full_Stack_Engineer.pdf" 
                rel="noopener"
                target='_blank'
                >
                    <div className="absolute inset-0 w-3 bg-gradient-to-r from-pink-700 to-purple-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-zinc-700 group-hover:text-white flex justify-center font-bold text-lg p-3">
                        Anthony&apos;s Resume
                        <svg className="fill-current w-4 h-4 mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    </span>
                </a>
            </button>
        
    )
}


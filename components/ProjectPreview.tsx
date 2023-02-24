import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import { description } from 'lib/demo.data'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from 'lib/sanity.image'

export default function PostPreview({project})
{
    const { title, description, image, href, key, gitHub} = project
    
    return (
        <div className='h-auto' key={key}>
            <a href={href} rel="noreferrer"  target='_blank'>
                <h3 className="mb-3 text-3xl leading-snug text-white hover:underline decoration-1 decoration-zinc-300 underline-offset-2">
                    {title}
                </h3>
                {description && <p className="mb-4 text-lg leading-relaxed text-white cursor-pointer hover:underline decoration-1 decoration-zinc-300 underline-offset-2">{description}</p>}
                <Image 
                className='h-96 w-full object-fit transition-shadow shadow-slate-800 duration-200 
                shadow-small hover:shadow-medium cursor-pointer object-fit h-64 hover:shadow-slate-800
                transition-shadow duration-200 hover:shadow-medium
                ' 
                src={image}
                width={2000}
                height={100}
                alt={`Cover Image for ${title}`}
                />
            </a>
            <div className='margin-auto flex m-3 justify-around'>
                <button className="group relative overflow-hidden bg-white shadow-slate-800 shadow-small w-1/3">
                    <a 
                    href={gitHub} 
                    rel="noopener"
                    target='_blank'
                    >
                        <div className="absolute inset-0 w-3 bg-gradient-to-r from-pink-700 to-purple-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-zinc-700 group-hover:text-white flex justify-center font-bold text-lg p-3">
                            Source Code
                        </span>
                    </a>
                </button>
                <button className="group relative overflow-hidden bg-white shadow-slate-800 shadow-small w-1/3">
                    <a 
                    href={href}
                    rel="noopener"
                    target='_blank'
                    >
                        <div className="absolute inset-0 w-3 bg-gradient-to-r from-pink-700 to-purple-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-zinc-700 group-hover:text-white flex justify-center font-bold text-lg p-3">
                            Live
                        </span>
                    </a>
                </button>
            </div>
        </div>
    )
}
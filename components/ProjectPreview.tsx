import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import { description } from 'lib/demo.data'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from 'lib/sanity.image'

export default function PostPreview({project})
{
    const { title, description, image, href, key} = project
    
    return (
        <div className='' key={key}>
            <a href={href} rel="noreferrer"  target='_blank'>
                <h3 className="mb-3 text-3xl leading-snug text-white hover:underline decoration-1 decoration-zinc-300 underline-offset-2">
                    {title}
                </h3>
                {description && <p className="mb-4 text-lg leading-relaxed text-white cursor-pointer hover:underline decoration-1 decoration-zinc-300 underline-offset-2">{description}</p>}
                <Image 
                className='h-fit w-full object-fit transition-shadow shadow-slate-800 duration-200 
                shadow-small hover:shadow-medium cursor-pointer object-fit h-64 hover:shadow-slate-800
                transition-shadow duration-200 hover:shadow-medium
                ' 
                src={image}
                width={2000}
                height={1000}
                alt={`Cover Image for ${title}`}
                />
            </a>
        </div>
    )
}
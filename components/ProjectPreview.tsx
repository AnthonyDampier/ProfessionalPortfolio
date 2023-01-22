import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import { description } from 'lib/demo.data'
import Link from 'next/link'

export default function PostPreview({project})
{
    const { title, description, image, href, key} = project
    
    return (
        <a href={href} target='_blank'>
            <div className='' key={key}>
                <h3 className="mb-3 text-3xl leading-snug text-white hover:underline cursor-pointer">
                    {title}
                </h3>
                {description && <p className="mb-4 text-lg leading-relaxed text-white cursor-pointer">{description}</p>}
                <img className='object-fit transition-shadow duration-200 hover:shadow-medium cursor-pointer object-fit h-64 hover:shadow-slate-700' src={image}/>
            </div>
        </a>
    )
}
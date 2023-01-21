import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import { description } from 'lib/demo.data'
import Link from 'next/link'

export default function PostPreview({project})
{
    const { title, description, image, href } = project
    
    return (
        <div>
        <h3 className="mb-3 text-3xl leading-snug text-white">
            <a href={href} className="hover:underline">
            {title}
            </a>
        </h3>
        {description && <p className="mb-4 text-lg leading-relaxed text-white">{description}</p>}
        </div>
    )
}
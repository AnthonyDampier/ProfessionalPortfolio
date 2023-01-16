import { urlForImage } from 'lib/sanity.image'
import type { Author } from 'lib/sanity.queries'
import Image from 'next/image'

export default function AuthorAvatar(props: Author) {
    const { name, picture } = props
    console.log('AuthorAvatar props: ',props);
    return (
        <div className="flex items-center">
        <div className="relative mr-4 h-26 w-26">
            <Image
            src={
                picture
                ? picture
                : 'https://source.unsplash.com/96x96/?face'
            }
            className="rounded-full"
            height={100}
            width={100}
            // @TODO add alternative text to avatar image schema
            alt={"Profile avatar of "+name}
            />
        </div>
        {/* <div className="text-xl font-bold">{name}</div> */}
        </div>
    )
}
import Image from "next/image";

const TechArray = [
    {
        title: 'Git',
        image: '../images/github-mark.png',
        href: 'https://github.com/AnthonyDampier',
    },
    {
        title: 'React',
        image: '../images/react-logo-7B3CE81517-seeklogo.com.png',
        href: '',
    },
    {
        title: 'Node.js',
        image: '../images/nodejs-logo-065257DE24-seeklogo.com.png',
        href: '',
    },
    {
        title: 'Next.js',
        image: '../images/Next-js.png',
        href: 'https://github.com/AnthonyDampier',
    },
    {
        title: 'Sanity.io',
        image: '../images/sanity-io.png',
        href: '',
    },
    {
        title: 'C#',
        image: '../images/c-sharp.png',
        href: '',
    },
    {
        title: 'Postgres',
        image: '../images/postgres.png',
        href: 'https://github.com/AnthonyDampier',
    },
    {
        title: 'VScode',
        image: '../images/visual-studio-code-hd-logo-thumbnail.png',
        href: 'https://github.com/AnthonyDampier',
    },
    {
        title: 'Git',
        image: '../images/github-mark.png',
        href: 'https://github.com/AnthonyDampier',
    },

]





export default function TechnologyKnowledge(){
    return(
        <>
            <h4>Tech</h4>
            <div className="flex justify-center">
            {TechArray.map((tech, index) => {
                return(
                    <a 
                    className="p-2" 
                    href={tech.href} 
                    rel="noreferrer"
                    target='_blank'
                    key={index}>
                        <Image 
                        className='' 
                        src={tech.image} 
                        alt={tech.title}
                        width={50} 
                        height={10}/>
                        <h4 className="hidden hover:display">{tech.title}</h4>
                    </a>
                )
            })}
            </div>
        </>
    );
}
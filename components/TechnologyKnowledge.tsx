const TechArray = [
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
                    <a href={tech.href} target="_blank" key={index}>
                        <img className="" src={tech.image} height={36} width={36} />
                        <h4 className="hidden hover:display">{tech.title}</h4>
                    </a>
                )
            })}
            </div>
        </>
    );
}
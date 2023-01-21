import ProjectPreview from "./ProjectPreview";

export default function ProjectDisplays({projects}) {
    return (
        <section>
        <div className="pb-20 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
            {projects.map((project: { title: any; description: any; href: any; image: any; }) => (
                <ProjectPreview
                    project={project}
                />
            ))}
        </div>
        </section>
    )
}
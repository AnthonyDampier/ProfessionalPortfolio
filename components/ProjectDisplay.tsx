import { Key } from "react";
import ProjectPreview from "./ProjectPreview";

export default function ProjectDisplays({projects}) {
    return (
        <section className="">
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2  md:gap-x-8 md:gap-y-16 lg:gap-x-32 mb-20">
                {projects.map((project: { title: any; description: any; href: any; image: any; }, index: Key) => (
                    <ProjectPreview
                        project={project}
                        key={index}
                    />
                ))}
            </div>
        </section>
    )
}
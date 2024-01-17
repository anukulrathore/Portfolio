"use client";

import ProjectCard from "./ProjectCard";
import projects from "./Projectsdata";

const ProjectsSection = () => {
  return (
    <section id="projects" className="justify-center">
        <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12 text-white">Projects</h2>
        <div className="grid grid-cols-2">
            {projects.map((project) => (
                <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                projectLink={project.projectLink}
                githubLink={project.githubLink} >
                </ProjectCard>
            ))}
        </div>
    </section>
  )
}

export default ProjectsSection
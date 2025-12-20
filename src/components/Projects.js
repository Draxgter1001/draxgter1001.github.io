import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import pokedexClientImage from '../assets/PokedexClient.png';
import useIntersectionObserver from '../hooks/useInterscetionObserver';
import plantIdentifierImage from '../assets/finalyearproject.png';
import masteriesLoL from '../assets/MLOLIcon.png';

function Projects() {
    const ref = useRef();
    const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

    const projectData = [
        {
            image: pokedexClientImage,
            title: 'Pokedex',
            description: "A simple pokedex where you can view all of your favourites pokemon up to gen 7.",
            technologies: ['Java', 'SpringBoot', 'React', 'Postgresql'],
            githubLink: 'https://github.com/Draxgter1001/pokedex_client',
            liveLink: 'https://draxgter1001.github.io/pokedex_client/',
        },
        {
            image: plantIdentifierImage,
            title: 'Venomous Plant Identifier',
            description: "A simple web app that identifies if a plant is venomous or not. It uses a machine learning model to identify the plant.",
            technologies: ['React', 'Java', 'SpringBoot', 'Postgresql'],
            liveLink: 'https://venomous-plant-identifier-frontend.vercel.app/'
        },
        {
            image: masteriesLoL,
            title: 'Masteries League of Legends',
            description: "A simple website where players can track their LoL champion masteries and see how many chests they can earn.",
            technologies: ['React', 'Java', 'SpringBoot', 'Postgresql'],
            githubLink: 'https://github.com/Draxgter1001/league-mastery',
            liveLink: 'https://league-mastery.vercel.app/'
        }
    ];

    return (
        <div
            ref={ref}
            id="projects"
            className={`min-h-screen p-5 bg-background text-text dark:bg-dark-background dark:text-dark-text transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <h1 className="text-6xl font-heading mb-8 text-center">Projects</h1>
            <div className="flex flex-wrap justify-center gap-8">
                {projectData.map((project, index) => (
                    <div key={index} className="w-full md:w-6/12 lg:w-5/12">
                        <ProjectCard
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                        />
                    </div>
                ))}
            </div>
            <hr className="w-full border-t-2 border-secondary my-6" />
        </div>
    );
}

export default Projects;

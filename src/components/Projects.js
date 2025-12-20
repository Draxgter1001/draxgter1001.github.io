import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import footballClubAppImage from '../assets/Football Club App.png';
import guessTheFlagImage from '../assets/Guess The Flag App.png';
import pokedexClientImage from '../assets/PokedexClient.png';
import useIntersectionObserver from '../hooks/useInterscetionObserver';

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
            image: ttsGeneratorImage,
            title: 'TTS Generator',
            description: "A simple TTS Generator that generates an audio file for you based on your text.",
            technologies: ['Python'],
            githubLink: 'https://github.com/Draxgter1001/TTS-Generator',
        },
        {
            image: plantIdentifierImage,
            title: 'Venomous Plant Identifier',
            description: "A simple web app that identifies if a plant is venomous or not. It uses a machine learning model to identify the plant.",
            technologies: ['React', 'Java', 'SpringBoot', 'Postgresql'],
            liveLink: 'https://venomous-plant-identifier-frontend.vercel.app/'
        },
        {
            image: MLOLIcon,
            title: 'Masteries League of Legends',
            description: "A simple website where players can track their LoL champion masteries and see how many chests they can earn.",
            technologies: ['React', 'Java', 'SpringBoot', 'Postgresql'],
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

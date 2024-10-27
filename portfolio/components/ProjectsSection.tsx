import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import {BsGithub, BsArrowUpRightSquare} from "react-icons/bs"

const projects = [
    {
        name: "Buurt Hub",
        description:
            "BuurtHub keeps you up-to-date with the latest events and activities in your community. " +
            "Easily sign up for upcoming community events and also stay informed about important announcements from community.",
        image: "/buurt-hub.png",
        github: "https://github.com/Sowjanyakambhampati/BuurtHub",
        link: "https://buurt-hub.vercel.app/",
    },
    {
        name: "StyleSavvy",
        description: "Style-Savvy is a versatile application designed for booking appointments for a range of expert beauty services, including hair care, spa treatments, skincare, and nail services, conveniently located in the city center. Users can easily reserve a hairstylist for a chosen date and time, with the flexibility to view and adjust appointments before finalizing bookings. Although currently tailored for single-user access, future updates will expand its functionality to accommodate multiple user authentications, enhancing its usability and accessibility.",
        image: "/stylesavvy.png",
        github: "https://github.com/Sowjanyakambhampati/StyleSavvy-Salon-Project",
        link: "https://stylesavvyproject.netlify.app/",
    },
    {
        name: "Battleship-game",
        description: "Battleship is a strategy type guessing game for two players. It is played on ruled grids on which each player's fleet of ships are marked. The locations of the fleets are concealed from the other player. Players alternate turns calling 'shots' at the other player's ships, and the objective of the game is to destroy the opposing player's fleet.",
        image: "/battleship.png",
        github: "https://github.com/Sowjanyakambhampati/battleship-game",
        link: "https://sowjanyakambhampati.github.io/battleship-game",
    },
]

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h1 className="my-10 text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div
                                    className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className=" md:w-1/2">
                                        <Link href={project.link}>
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-8 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row align-bottom space-x-4">
                                            <Link href={project.github} target="_blank">
                                                <BsGithub
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                            <Link href={project.link} target="_blank">
                                                <BsArrowUpRightSquare
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default ProjectsSection

import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import AkiraFont from "./AkiraFont";

type Project = {
    id: string;
    name: string;
    description: string;
    image: string;
    url?: string;
};

const projects: Project[] = [
    {
        id: "1",
        name: "Street League Spec Drone Racing",
        description:
            "Street League Spec Drone Racing is an exhilarating racing league designed for passionate drone enthusiasts and racers. This community-driven initiative brings together drone pilots from diverse backgrounds to compete, connect, and elevate the sport of drone racing.",
        image: "/images/projects/street-league-2025.jpg",
        url: "https://streetleague.io/",
    },
    {
        id: "2",
        name: "Rocket Drones Portal Experience",
        description:
            "Your all-in-one hub for drone education and racing! Dive into comprehensive drone curriculums, sharpen your skills with an integrated simulator, and stay ahead with streamlined race scheduling. Join a nationwide network of schools empowering students with cutting-edge drone training and competitive racing opportunities!",
        image: "/images/projects/rocket-drones.jpg",
        url: "https://rocketdrones.com/",
    },
    {
        id: "3",
        name: "Rocket Drones Racing Timer",
        description:
            "An Electron-based Timer interface that manages race rounds, heats, and pilots. Built-in formats keep everything simple and instant results as the race goes on. Portal integration allows for syncing and sharing races with the league.",
        image: "/images/projects/rocket-drones-timing.jpg",
    },
    {
        id: "4",
        name: "Flowstate Drone Racing Simulator",
        description:
            "Currently developing a sequel to the open source UPBGE-based Flowstate simulator. The new Unity-based version will contain an overhauled UI as well as completely new race features! The assets were created in Photoshop as well as Blender, then imported into Unity.",
        image: "/images/projects/flowstate.jpg",
    },
    {
        id: "5",
        name: "Street League Spec Tester",
        description:
            "I’ve utilized betaflight’s existing code base to create a spec checker that finds out the motors power and suggests a motor output limit (MOPL), so that racing is closer than ever, on different setups.",
        image: "/images/projects/betaflight-rpm.jpg",
    },
    {
        id: "6",
        name: "PVREA Interactive Microgrid UI",
        description:
            "PVREA needed an on-site “at-a-glance” look at their microgrid setup and current state. This shows charging and discharging states from the battery, as well as switching during appropriate weather.",
        image: "/images/projects/PVREA.png",
    },
    {
        id: "7",
        name: "Red Feather Lakes",
        description:
            "Microgrid status screen mockup, as well as a Augmented Reality version demo in the Microsoft Hololens.",
        image: "/images/projects/encorp.jpg",
    },
];

export default function Projects() {
    return (
        <ul>
            {projects ? (
                projects?.map((project) => (
                    <SingleProject key={project.id} project={project} />
                ))
            ) : (
                <p>No projects found</p>
            )}
        </ul>
    );
}

function SingleProject({ project }: { project: Project }) {
    return (
        <li className="md:flex gap-8 py-12 border-b-2 border-white/20 items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
                <Image
                    src={project.image}
                    alt={`${project.name} project image`}
                    width={600}
                    height={600}
                />
            </div>
            <div className="md:w-1/2">
                <AkiraFont variant="superBold">
                    <h3 className="text-2xl font-bold mb-3 leading-none">
                        {project.name}
                    </h3>
                </AkiraFont>
                <p className="text-lg mb-3">{project.description}</p>
                {project.url && (
                    <Link
                        href={project.url}
                        target="_blank"
                        className="text-personal"
                    >
                        View Website{" "}
                        <ArrowRightIcon className="inline-block relative -top-0.5 w-4 h-4" />
                    </Link>
                )}
            </div>
        </li>
    );
}

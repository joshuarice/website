import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import AkiraFont from "./AkiraFont";

type Project = {
    id: string;
    name: string;
    description: string;
    image: string;
    url: string | null;
};

export default async function Projects() {
    const supabase = await createClient();

    const { data: projects } = await supabase.from("projects").select("*");

    return (
        <ul>
            {projects ? (
                projects?.map((project: Project) => (
                    <Project key={project.id} project={project} />
                ))
            ) : (
                <p>No projects found</p>
            )}
        </ul>
    );
}

function Project({ project }: { project: Project }) {
    return (
        <li className="md:flex gap-8 py-12 border-b-4 border-foreground/20 items-center">
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

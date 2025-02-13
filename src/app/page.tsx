import AkiraFont from "@/components/AkiraFont";
import MountainTop from "@/components/MountainTop";
import SocialIcons from "@/components/SocialIcons";
import Projects from "@/components/Projects";
import Link from "next/link";
import { ArrowRightIcon, ChevronsRightIcon } from "lucide-react";

export default async function Home() {
    return (
        <main>
            <MountainTop />

            <div className="mx-auto max-w-6xl px-8 pt-10 pb-5 relative">
                <div className="md:flex gap-8 justify-between">
                    <div className="mb-8">
                        <AkiraFont variant="bold">
                            <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide">
                                Joshua Rice
                            </h1>
                        </AkiraFont>

                        <div className="w-24 h-1 bg-personal mb-8" />

                        <div className="md:flex mb-5 items-center gap-2">
                            <p className="text-xl md:text-2xl text-personal inline-block">
                                Full-stack Developer{" "}
                                <ChevronsRightIcon className="w-6 h-6 text-personal/50 inline-block" />
                                UI/UX Designer{" "}
                                <ChevronsRightIcon className="w-6 h-6 text-personal/50 inline-block" />
                                Drone Pilot & Racer
                            </p>
                        </div>

                        <SocialIcons />
                    </div>
                    <div>
                        <Link
                            href="mailto:me@joshuarice.net"
                            target="_blank"
                            className="bg-personal text-background px-4 py-2 rounded-md inline-block"
                        >
                            Contact Me{" "}
                            <ArrowRightIcon className="inline-block relative -top-0.5 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-6xl px-8 pt-10 relative mb-24">
                <div className="w-24 h-1 bg-foreground/20 mb-12" />
                <AkiraFont variant="superBold">
                    <h2 className="text-4xl md:text-7xl font-bold">
                        Latest <br />
                        Projects
                    </h2>
                </AkiraFont>
                <Projects />
                <div className="mb-12" />
                <AkiraFont variant="superBold">
                    <h2 className="text-4xl md:text-7xl font-bold mb-8">
                        Archive
                    </h2>
                </AkiraFont>
                <p className="mb-10">Some of work through-out the years.</p>
                <div className="flex gap-4">
                    <Link
                        href="https://www.behance.net/joshuarice?locale=en_US"
                        target="_blank"
                        className="bg-personal md:text-2xl text-background px-4 py-2 rounded-md inline-block"
                    >
                        Behance.net Portfolio
                        <ArrowRightIcon className="inline-block relative -top-0.5 w-4 h-4" />
                    </Link>
                    <Link
                        href="https://www.flickr.com/photos/srphm/"
                        target="_blank"
                        className="bg-personal md:text-2xl text-background px-4 py-2 rounded-md inline-block"
                    >
                        Flickr.com Archive
                        <ArrowRightIcon className="inline-block relative -top-0.5 w-4 h-4" />
                    </Link>
                </div>
            </div>
            <div className="mx-auto max-w-6xl px-8 pb-12 relative flex justify-between">
                <p className="text-sm text-foreground/50">
                    &copy; 2025 Joshua Rice. All rights reserved.
                </p>
                <p className="text-sm text-foreground/50">
                    Made with ❤️ in Colorado.{" "}
                    <Link
                        className="underline text-personal"
                        href="https://github.com/joshuarice/website"
                        target="_blank"
                    >
                        Github
                    </Link>
                </p>
            </div>
        </main>
    );
}

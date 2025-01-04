import AkiraFont from "@/components/AkiraFont";
import MountainTop from "@/components/MountainTop";
import SocialIcons from "@/components/SocialIcons";
import Projects from "@/components/Projects";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ArrowRightIcon, ChevronsRightIcon } from "lucide-react";

export default async function Home() {
    return (
        <main>
            <MountainTop />
            <div className="mx-auto max-w-6xl px-8 pt-4 pb-5 relative">
                {/* <ThemeSwitcher />
                <div className="mb-6" /> */}
                <div className="flex gap-8 justify-between">
                    <div>
                        <AkiraFont variant="bold">
                            <h1 className="text-4xl font-bold mb-3 tracking-wide">
                                Joshua Rice
                            </h1>
                        </AkiraFont>
                        <div className="w-24 h-1 bg-personal mb-8" />
                        <div className="flex mb-5 items-center gap-2">
                            <p className="text-2xl text-personal">
                                Full-stack Developer{" "}
                            </p>
                            <ChevronsRightIcon className="w-6 h-6 text-personal/50" />
                            <p className="text-2xl text-personal">
                                UI/UX Designer{" "}
                            </p>
                            <ChevronsRightIcon className="w-6 h-6 text-personal/50" />
                            <p className="text-2xl text-personal">
                                Drone Pilot & Racer
                            </p>
                        </div>
                        <SocialIcons />
                    </div>
                    <div>
                        <Link
                            href=""
                            target="_blank"
                            className="bg-personal text-background px-4 py-2 rounded-md"
                        >
                            Contact Me{" "}
                            <ArrowRightIcon className="inline-block relative -top-0.5 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-6xl px-8 pt-10 relative">
                <div className="w-24 h-1 bg-foreground/20 mb-12" />
                <AkiraFont variant="superBold">
                    <h2 className="text-7xl font-bold">
                        Latest <br />
                        Projects
                    </h2>
                </AkiraFont>
                <Projects />
            </div>
        </main>
    );
}

import { Github, Instagram, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

export default function SocialIcons() {
    return (
        <ul className="flex gap-4">
            <li>
                <Link
                    href="https://www.linkedin.com/in/joshuazrice/"
                    target="_blank"
                >
                    <Linkedin className="h-6 w-6 text-personal hover:text-personal/80" />
                </Link>
            </li>
            <li>
                <Link
                    href="https://www.instagram.com/jricefpv/"
                    target="_blank"
                >
                    <Instagram className="h-6 w-6 text-personal hover:text-personal/80" />
                </Link>
            </li>
            <li>
                <Link href="https://github.com/joshuarice" target="_blank">
                    <Github className="h-6 w-6 text-personal hover:text-personal/80" />
                </Link>
            </li>
            <li>
                <Link
                    href="https://www.youtube.com/channel/UCpYYMr7mZT370TBwSOZuqBA"
                    target="_blank"
                >
                    <Youtube className="h-6 w-6 text-personal hover:text-personal/80" />
                </Link>
            </li>
        </ul>
    );
}

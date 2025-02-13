import { Github, Instagram, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

export default function SocialIcons() {
    return (
        <ul className="flex gap-4">
            <li>
                <Link href="https://www.linkedin.com/in/joshuarice1/">
                    <Linkedin className="h-6 w-6 text-personal hover:text-personal/80" />
                </Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/joshuarice1/">
                    <Instagram className="h-6 w-6 text-personal hover:text-personal/80" />
                </Link>
            </li>
            <li>
                <Link href="https://github.com/joshuarice1">
                    <Github className="h-6 w-6 text-personal hover:text-personal/80" />
                </Link>
            </li>
            <li>
                <Link href="https://www.youtube.com/@joshuarice1">
                    <Youtube className="h-6 w-6 text-personal hover:text-personal/80" />
                </Link>
            </li>
        </ul>
    );
}

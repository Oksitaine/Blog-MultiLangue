import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

interface SocialLinkProps {
    link: string,
    socialmedia: string,
    size?: number,
    isShareURL?: boolean
}

export default function SocialLink({link, socialmedia, size = 18, isShareURL = false}: SocialLinkProps) {

    return (
        <Link href={link}>
            <div className={`${isShareURL ? "py-2 px-3 bg-neutral-200 rounded-md text-neutral-600 hover:bg-neutral-800 hover:text-neutral-100 duration-100 ease-in-out transition-colors" : ""}`}>
                {getIcon(socialmedia, size)}
            </div>
        </Link>
    )
}

function getIcon(socialmedia: string, size : number) {
    switch (socialmedia) {
        case "twitter":
            return <Twitter size={size}/>
        case "linkedin":
            return <Linkedin size={size}/>
        case "github":
            return <Github size={size}/>
        default:
            return <div/>
    }
}
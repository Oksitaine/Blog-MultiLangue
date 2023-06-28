import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function SocialLink({link, socialmedia, size = 18}: {link: string, socialmedia: string, size?: number}) {

    return (
        <Link href={link}>
            {getIcon(socialmedia, size)}
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
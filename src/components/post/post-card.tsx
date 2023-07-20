import Link from "next/link"
import { Post } from "../../../types/collextion"
import Image from "next/image"
import PostContent from "./post-content"
import { Layout } from "lucide-react"

interface PostProps {
    post: Post,
    layout?: "vertical" | "horizontal",
    reverse?: boolean,
    local : string
}

export default function PostCard({post, layout = "horizontal", reverse = false, local}: PostProps){

    return (
        <Link 
            href={`/${local}/post/${post.slug}`} 
            className={`@container
                ${
                    layout === "horizontal" ?
                    "grid grid-cols-1 md:grid-cols-2 gap-10 items-center" :
                    "space-y-10"
                }
            `}>
                <Image 
                    priority
                    className={`rounded-md w-full object-cover object-center max-h-[300px] h-full ${ reverse ? "md:order-last" : "" } `} 
                    src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}?key=optimised`} 
                    width={600} 
                    height={300} 
                    alt={post.title}
                />
            <PostContent local={local} post={post}/>
        </Link>
    )
}
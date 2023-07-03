import Link from "next/link"
import { Post } from "../../../types/collextion"
import Image from "next/image"
import PostContent from "./post-content"
import { Layout } from "lucide-react"

interface PostProps {
    post: Post,
    layout?: "vertical" | "horizontal",
    reverse?: boolean
}

export default function PostCard({post, layout = "horizontal", reverse = false}: PostProps){

    return (
        <Link 
            href={`/post/${post.slug}`} 
            className={`@container
                ${
                    layout === "horizontal" ?
                    "grid grid-cols-1 md:grid-cols-2 gap-10 items-center" :
                    "space-y-10"
                }
            `}>
                <Image 
                    className={`rounded-md w-full object-cover object-center max-h-[300px] h-full ${ reverse ? "md:order-last" : "" } `} 
                    src={post.image} 
                    width={600} 
                    height={300} 
                    alt={post.title}
                />
            <PostContent post={post}/>
        </Link>
    )
}
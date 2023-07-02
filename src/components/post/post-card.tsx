import Link from "next/link"
import { Post } from "../../../types/collextion"
import Image from "next/image"
import PostContent from "./post-content"
import { Layout } from "lucide-react"

interface PostProps {
    post: Post,
    layout?: "vertical" | "horizontal"
}

export default function PostCard({post, layout = "horizontal"}: PostProps){

    return (
        <Link 
            href={`/post/${post.slug}`} 
            className={`
                ${
                    layout === "horizontal" ?
                    "grid grid-cols-2 gap-10 items-center" :
                    "space-y-10"
                }
            `}>
                <Image 
                    className="rounded-md w-full object-cover object-center max-h-[300px]" 
                    src={post.image} 
                    width={600} 
                    height={300} 
                    alt={post.title}
                />
            <PostContent post={post}/>
        </Link>
    )
}
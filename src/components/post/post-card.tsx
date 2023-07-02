import Link from "next/link"
import { Post } from "../../../types/collextion"
import Image from "next/image"
import PostContent from "./post-content"

interface PostProps {
    post: Post,
}

export default function PostCard({post}: PostProps){

    return (
        <Link href={`/post/${post.slug}`} className="grid grid-cols-2 gap-10 items-center">
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
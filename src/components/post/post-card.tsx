import Link from "next/link"
import { Post } from "../../../types/collextion"
import Image from "next/image"

interface PostProps {
    post: Post,
}

export default function PostCard({post}: PostProps){

    return (
        <Link href={`/post/${post.slug}`} className="grid grid-cols-2 gap-10">
            <Image src={post.image} width={600} height={300} alt={post.title}/>
            <div>{post.title}</div>
        </Link>
    )
}
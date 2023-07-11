import { Post } from "../../../types/collextion";
import PostContent from "./post-content";
import Image from "next/image";

interface PostHeroProps {
    post: Post
}

export default function PostHero({post} : PostHeroProps) {

    return <div>
        <PostContent post={post} isPostPage />
        <Image 
            className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
            src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}?key=optimised`} 
            alt={post.title} 
            width={1280} 
            height={500} 
        />
    </div>
}
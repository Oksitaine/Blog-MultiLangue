import { ArrowRight } from "lucide-react";
import { Post } from "../../../types/collextion";
import { getReadingTime, getRealiveDate } from "../../../lib/helpers";

interface PostContentProps {
    post: Post,
    isPostPage?: boolean
}

export default function PostContent({post, isPostPage = false} : PostContentProps){

    return (
        <div className="space-y-2">
            <div className={`items-center flex gap-1 text-neutral-400 ${isPostPage ? "text-sm" : "@md:text-sm text-xs"}`}>
                <div className={
                        `font-medium ${!(post.category.title === 'Coding') ? 'text-emerald-500' : 'text-indigo-500'}`
                    }>
                        {post.category.title}
                </div>
                <CircleCategorie/>
                <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
                <CircleCategorie/>
                <div>{getReadingTime(post.body)}</div>
                <CircleCategorie/>
                <div>{getRealiveDate(post.created_at)}</div>
            </div>
            <h2 className={`${isPostPage ? "text-2xl md:text-3xl lg:text-4xl font-bold" : "@lg:text-3xl text-xl @md:text-2xl font-medium"}`} >{post.title}</h2>
            <p className="text-base @lg:text-lg leading-snug text-neutral-600">{post.description}</p>
            {
                !isPostPage && <div className="flex items-center gap-2 pt-2">Read More <ArrowRight size="14"/></div>
            }
        </div>
    )
}

function CircleCategorie(){
    return (
        <div className="w-2 h-2 rounded-full bg-neutral-200"/>
    )
}
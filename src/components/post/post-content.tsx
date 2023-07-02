import { ArrowRight } from "lucide-react";
import { Post } from "../../../types/collextion";
import { getReadingTime, getRealiveDate } from "../../../lib/helpers";

interface PostContentProps {
    post: Post,
}

export default function PostContent({post} : PostContentProps){

    return (
        <div className="space-y-2">
            <div className="items-center flex gap-1 text-sm text-neutral-400">
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
            <h2 className="font-medium @lg:text-3xl text-xl @md:text-2xl" >{post.title}</h2>
            <p className="text-base @lg:text-lg leading-snug text-neutral-600">{post.description}</p>
            <div className="flex items-center gap-2 pt-2">Read More <ArrowRight size="14"/></div>
        </div>
    )
}

function CircleCategorie(){
    return (
        <div className="w-2 h-2 rounded-full bg-neutral-200"/>
    )
}
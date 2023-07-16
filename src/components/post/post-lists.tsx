import { Post } from "../../../types/collextion";
import PostCard from "./post-card";

interface PostListProps {
    posts: Post[];
    layout?: "vertical" | "horizontal";
    local : string
}

export default function PostlistProps({posts, layout = "vertical", local} : PostListProps){

    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 pb-10 lg:pb-0">{posts.map((post) => {
            return (
                <PostCard local={local} key={post.id} post={post} layout={layout}/>
            )
        })}

        </div>
    )
}
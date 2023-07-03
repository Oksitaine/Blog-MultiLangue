import { Post } from "../../../types/collextion";
import PostCard from "./post-card";

interface PostListProps {
    posts: Post[];
    layout?: "vertical" | "horizontal";
}

export default function PostlistProps({posts, layout = "vertical"} : PostListProps){

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-flow-col lg:auto-cols-fr">{posts.map((post) => {
            return (
                <PostCard key={post.id} post={post} layout={layout}/>
            )
        })}

        </div>
    )
}
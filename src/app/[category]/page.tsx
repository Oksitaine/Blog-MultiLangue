import PaddinContainer from "@/components/layouts/padding-container";
import { DUMMY_CATEGORIES, DUMMY_DATA } from "../../../DUMMY_DATA";
import PostlistProps from "@/components/post/post-lists";
import { Category, Post } from "../../../types/collextion";

type params = {
    category: string;
}

export const generateStaticParams = () => {
    return DUMMY_CATEGORIES.map((category : Category) => {
        return {
            slug: category.slug.toLocaleLowerCase()
        }
    })
}

export default function Page({params} : {params: params}) {

    const posts = DUMMY_DATA.filter((post : Post) => (post.category.title.toLocaleLowerCase() === params.category))

    return (
        <PaddinContainer>
            <PostlistProps posts={posts} />
        </PaddinContainer>
    );
}

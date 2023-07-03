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
            category: category.slug.toLocaleLowerCase()
        }
    })
}

export default function Page({params} : {params: params}) {

    const category = DUMMY_CATEGORIES.find((category : Category) => category.slug.toLocaleLowerCase() === params.category)
    const posts = DUMMY_DATA.filter((post : Post) => (post.category.title.toLocaleLowerCase() === params.category))

    return (
        <PaddinContainer>
            <div className="mb-10">
                <h1 className="text-4xl font-semibold" >{category?.title}</h1>
                <p className="text-lg text-neutral-600" >{category?.description}</p>
            </div>
            <PostlistProps posts={posts} />
        </PaddinContainer>
    );
}

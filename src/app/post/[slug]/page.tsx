import PaddinContainer from "@/components/layouts/padding-container";
import { DUMMY_DATA } from "../../../../DUMMY_DATA";
import { notFound } from "next/navigation";
import PostHero from "@/components/post/post-hero";

export const generateStaticParams = () => {
    return DUMMY_DATA.map((post) => {
        return {
            slug: post.slug
        }
    })
}


export default function Page({params} : {params: {slug: string}}) {

    const post = DUMMY_DATA.find((post) => post.slug === params.slug)

    if(!post){
        notFound()
    }

    return (
        <PaddinContainer>
            <PostHero post={post} />
        </PaddinContainer>
    );
}
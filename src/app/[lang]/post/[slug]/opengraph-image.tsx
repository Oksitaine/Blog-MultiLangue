import { ImageResponse } from "next/server";
import { getPost } from "./page";
import { getReadingTime, getRealiveDate } from "../../../../../lib/helpers";

export const alt = "post"
export const size = {
    width: 1200,
    height: 630
}

export const contentType = "image/png"

export default async function Image({ params : { slug, lang }} : { params : { slug : string, lang : string } }){

    const post = await getPost(slug, lang)

    return new ImageResponse(
        <div tw="relative flex w-full h-full items-center justify-center" >
            <div tw="absolute flex inset-0">
                <img
                    tw="flex flex-1 object-cover w-full h-full object-center"
                    src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}`}
                    alt={post?.title}
                />
                <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
            </div>
            <div tw="flex flex-col text-neutral-50">
                <div tw="text-[60px]">{post?.title}</div>
                <div tw="text-2xl max-w-4xl">{post?.description}</div>
                <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200">
                    <div tw={`font-medium ${ post?.category.title === "Coding" ? "text-emerald-600" : "text-indigo-600" }`}>
                        {post?.category.title}
                    </div>
                    <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300"/>
                    <div>{`${post?.author.first_name} ${post?.author.last_name}`}</div>
                    <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300"/>
                    <div>{getReadingTime(post?.body, lang)}</div>
                    <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300"/>
                    <div>{getRealiveDate(post?.date_created, lang)}</div>
                </div>
            </div>
        </div>
    )
}
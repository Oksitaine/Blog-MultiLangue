import { ImageResponse } from "next/server";
import { getCategoryData } from "./page";
import { getReadingTime, getRealiveDate } from "../../../../lib/helpers";

export const alt = "category"
export const size = {
    width: 1200,
    height: 630
}

export const contentType = "image/png"

export default async function Image({ params : { category, lang }} : { params : { category : string, lang : string } }){

    const post = await getCategoryData(category, lang)

    return new ImageResponse(
        <div tw="relative flex w-full h-full items-center justify-center" >
            <div tw="absolute flex inset-0">
                <img
                    tw="flex flex-1 object-cover w-full h-full object-center"
                    src={"https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                    alt={post?.title}
                />
                <div tw={`absolute flex inset-0 bg-opacity-50 ${
                    post?.title === "Codage" || post?.title === "Coding" || post?.title === "Codierung" ? "bg-emerald-600" : "bg-indigo-600" }`} />
            </div>
            <div tw="flex flex-col text-white">
                <div tw="text-[60px]">{post?.title}</div>
                <div tw="text-3xl max-w-4xl">{post?.description}</div>
            </div>
        </div>
    )
}
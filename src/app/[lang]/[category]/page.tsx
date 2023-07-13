import PaddinContainer from "@/components/layouts/padding-container";
import { DUMMY_CATEGORIES, DUMMY_DATA } from "../../../../DUMMY_DATA";
import PostlistProps from "@/components/post/post-lists";
import { Category, Post } from "../../../../types/collextion";
import directus from "../../../../lib/directus";
import { notFound } from "next/navigation";

type params = {
    category: string;
}

export const generateStaticParams = async () => {
    try {
        const categories = await directus.items("category").readByQuery({
            filter:{
                status:{
                    _eq: "published"
                }
            },
            fields: ["slug"]
        })

        const params = categories?.data?.map((category) => {
            return {
                category: category.slug as string
            }
        })

        return params || []
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching categories")
    }
}

export default async function Page({params} : {params: params}) {

    const getCategoryData = async () => {
        try {
            const category = await directus.items("category").readByQuery({
                filter: {
                    slug: {
                        _eq: params.category
                    }
                },
                fields: [
                    "*",
                    "posts.*",
                    "posts.author.id",
                    "posts.author.first_name",
                    "posts.author.last_name",
                    "posts.category.id",
                    "posts.category.title"
                ]
            })

            return category?.data?.[0]
        } catch (error) {
            throw new Error("Error fetching category data")
        }
    }

    const category = await getCategoryData()

    if(!category){
        notFound()
    }

    const typeCategory = category as unknown as {
        id: string;
        title: string;
        description: string;
        slug: string;
        posts: Post[];
    }

    return (
        <PaddinContainer>
            <div className="mb-10">
                <h1 className="text-4xl font-semibold" >{typeCategory?.title}</h1>
                <p className="text-lg text-neutral-600" >{typeCategory?.description}</p>
            </div>
            <PostlistProps posts={typeCategory.posts} />
        </PaddinContainer>
    );
}

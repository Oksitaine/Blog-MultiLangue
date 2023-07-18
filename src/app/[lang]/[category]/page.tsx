import PaddinContainer from "@/components/layouts/padding-container";
import { DUMMY_CATEGORIES, DUMMY_DATA } from "../../../../DUMMY_DATA";
import PostlistProps from "@/components/post/post-lists";
import { Category, Post } from "../../../../types/collextion";
import directus from "../../../../lib/directus";
import { notFound } from "next/navigation";
import { cache } from "react";

type params = {
    category: string;
    lang: string
}

export const generateMetadata = async ({ params: { category, lang } } : { params : params }) => {

    const categoryData = await getCategoryData(category, lang)

    return {
        title: categoryData.title,
        descrption: categoryData.description,
        openGraph: {
          title: categoryData.title ,
          description: categoryData.description,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/${category}`,
          siteName: categoryData.title ,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-iamge.png`,
              width: 1200,
              height: 628,
            }
          ],
          locale: lang,
          type: 'website',
        }
    }
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
                category: category.slug as string,
                lang: "en"
            }
        })

        const paramsDE = categories?.data?.map((category) => {
            return {
                category: category.slug as string,
                lang: "de"
            }
        })

        const paramsFR = categories?.data?.map((category) => {
            return {
                category: category.slug as string,
                lang: "fr"
            }
        })

        const Allparams = params?.concat(paramsDE ?? []).concat(paramsFR ?? [])

        return Allparams || []
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching categories")
    }
}

export default async function Page({params} : {params: params}) {

    const category = await getCategoryData( params.category, params.lang )

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
            <PostlistProps local={params.lang} posts={typeCategory.posts} />
        </PaddinContainer>
    );
}

const getCategoryData = cache(async (categorySLUG : string, lang : string) => {
    try {
        const category = await directus.items("category").readByQuery({
            filter: {
                slug: {
                    _eq: categorySLUG
                }
            },
            fields: [
                "*",
                "posts.*",
                "posts.author.id",
                "posts.author.first_name",
                "posts.author.last_name",
                "posts.category.id",
                "posts.category.title",
                "posts.translations.*",
                "translations.*"
            ]
        })

        const Data_Categorie = category?.data?.[0]
        
        if(lang === "en"){
            return Data_Categorie
        } else if ( lang === "de" ){
            return {
                ...Data_Categorie,
                title: Data_Categorie.translations.find((categorie : any) => categorie.languages_id === "de-DE").title,
                description: Data_Categorie.translations.find((categorie : any) => categorie.languages_id === "de-DE").description,
                posts : Data_Categorie.posts.map((post : any) => {
                    return {
                        ...post,
                        title : post.translations.find((localpost : any) => localpost.languages_code === "de-DE").title,
                        description : post.translations.find((localpost : any) => localpost.languages_code === "de-DE").description,
                    }
                })
            }
        } else {
            return {
                ...Data_Categorie,
                title: Data_Categorie.translations.find((categorie : any) => categorie.languages_id === "fr-FR").title,
                description: Data_Categorie.translations.find((categorie : any) => categorie.languages_id === "fr-FR").description,
                posts : Data_Categorie.posts.map((post : any) => {
                    return {
                        ...post,
                        title : post.translations.find((localpost : any) => localpost.languages_code === "fr-FR").title,
                        description : post.translations.find((localpost : any) => localpost.languages_code === "fr-FR").description,
                    }
                })
            }
        }
    } catch (error) {
        // Error data in /fr and /de path
        notFound()
    }
})
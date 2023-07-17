import PaddinContainer from "@/components/layouts/padding-container";
import { DUMMY_DATA, socialMedia } from "../../../../../DUMMY_DATA";
import { notFound } from "next/navigation";
import PostHero from "@/components/post/post-hero";
import SocialLink from "@/components/elements/social-link";
import { SocialMedia } from "../../../../../types/collextion";
import PostBody from "@/components/post/post-body";
import CTACard from "@/components/elements/cta-card";
import directus from "../../../../../lib/directus";

export const generateStaticParams = async () => {
    try {
        const post = await directus.items("post").readByQuery({
            filter:{
                status:{
                    _eq: "published"
                }
            },
            fields: ["slug"]
        })

        const params = post?.data?.map((post) => {
            return {
                slug: post.slug as string,
                lang: "en"
            }
        })

        const paramsDE = post?.data?.map((post) => {
            return {
                slug: post.slug as string,
                lang: "de"
            }
        })

        const paramsFR = post?.data?.map((post) => {
            return {
                slug: post.slug as string,
                lang: "fr"
            }
        })

        const Allparams = params?.concat(paramsDE ?? []).concat(paramsFR ?? [])

        return Allparams || []
    } catch (error) {
        throw new Error("Error fetching posts")
    }
}

export default async function Page({params} : {params: {
    lang: string;
    slug: string
}}) {

    const getPost = async () => {
        try {
            const post = await directus.items("post").readByQuery({
                filter: {
                    slug: {
                        _eq: params.slug
                    }
                },
                fields: ["*", "category.id", "category.title", "author.id", "author.first_name", "author.last_name", "translations.*","category.translations.*"]
            })

            const Data_Post = post?.data?.[0]

            if(params.lang === "en"){
                return Data_Post
            } else if (params.lang === "de"){
                return {
                    ...Data_Post,
                    title : Data_Post.translations.find((post : any) => post.languages_code === "de-DE").title,
                    description : Data_Post.translations.find((post : any) => post.languages_code === "de-DE").description,
                    body : Data_Post.translations.find((post : any) => post.languages_code === "de-DE").body
                }
            } else {
                return {
                    ...Data_Post,
                    title : Data_Post.translations.find((post : any) => post.languages_code === "fr-FR").title,
                    description : Data_Post.translations.find((post : any) => post.languages_code === "fr-FR").description,
                    body : Data_Post.translations.find((post : any) => post.languages_code === "fr-FR").body
                }
            }
        } catch (error) {
            throw new Error("Error fetching post data")
        }
    }
    
    const post = await getPost()

    if(!post){
        notFound()
    }

    return (
        <PaddinContainer>
            <div className="space-y-10">
                <PostHero local={params.lang} post={post} />
                    <div className="flex flex-col gap-10 md:flex-row" >
                        <div className="relative " >
                            <div className="sticky flex md:flex-col items-center gap-5 top-20 " >
                                <div className="font-medium md:hidden" >Share this content : </div>
                                {socialMedia.map((social : SocialMedia) => {
                                    return ( social.CanHaveShareLink ?
                                    <SocialLink isShareURL key={social.socialname} link={social.Sharelink + `/post/${post.slug}`} socialmedia={social.socialname} size={18} /> :
                                    null)
                                })}
                            </div>
                        </div>
                         <PostBody body={post.body} />
                    </div>
                <CTACard local={params.lang}/>
            </div>
        </PaddinContainer>
    );
}
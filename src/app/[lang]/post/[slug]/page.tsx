import PaddinContainer from "@/components/layouts/padding-container";
import { DUMMY_DATA, socialMedia } from "../../../../../DUMMY_DATA";
import { notFound } from "next/navigation";
import PostHero from "@/components/post/post-hero";
import SocialLink from "@/components/elements/social-link";
import { SocialMedia } from "../../../../../types/collextion";
import PostBody from "@/components/post/post-body";
import CTACard from "@/components/elements/cta-card";
import directus from "../../../../../lib/directus";
import { cache } from "react";
import { Metadata } from "next";
import { Article, TechArticle, WithContext } from "schema-dts";
import siteConfig from "../../../../../config/site";
import getDictionary from "../../../../../lib/getDictionary";

export const generateStaticParams = async () => {
    try {
        const post = await directus.items("post").readByQuery({
            filter: {
                status: {
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

export const generateMetadata = async ({ params: { slug, lang } }: { params: { slug: string, lang: string } }): Promise<Metadata> => {

    const post = await getPost(slug, lang)

    return {
        title: post?.title,
        description: post?.description,
        openGraph: {
            title: post.title,
            description: post.description,
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/post/${slug}`,
            siteName: post.title,
            locale: lang,
            type: 'website',
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/post/${slug}`,
            languages: {
                'en-US': `${process.env.NEXT_PUBLIC_SITE_URL}/en/post/${slug}`,
                'fr-FR': `${process.env.NEXT_PUBLIC_SITE_URL}/fr/post/${slug}`,
                'de-DE': `${process.env.NEXT_PUBLIC_SITE_URL}/de/post/${slug}`,
            }
        }
    }
}

export default async function Page({ params }: {
    params: {
        lang: string;
        slug: string
    }
}) {

    const post = await getPost(params.slug, params.lang)

    const JsonLD : WithContext<Article> = {
        "@context": "https://schema.org", 
        "@type": "Article",
        headline: post.title,
        image: `${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}`,
        author: post.author.first_name + " " + post.author.last_name, 
        genre: post.category.title,
        publisher: siteConfig.site,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.lang}/post/${params.slug}/opengraph-image.png`,
        datePublished: new Date(post.date_created).toISOString(),
        dateCreated: new Date(post.date_created).toISOString(),
        dateModified: new Date(post.date_updated).toISOString(),
        description: post.description,
        articleBody: post.body
    }

    if (!post) {
        notFound()
    }

    const dictionary = await getDictionary(params.lang)

    return (
        <PaddinContainer>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLD) }}
            />
            <div className="space-y-10">
                <PostHero local={params.lang} post={post} />
                <div className="flex flex-col gap-10 md:flex-row" >
                    <div className="relative " >
                        <div className="sticky flex md:flex-col items-center gap-5 top-20 " >
                            <div className="font-medium md:hidden" >Share this content : </div>
                            {socialMedia.map((social: SocialMedia) => {
                                return (social.CanHaveShareLink ?
                                    <SocialLink isShareURL key={social.socialname} link={social.Sharelink + `/post/${post.slug}`} socialmedia={social.socialname} size={18} /> :
                                    null)
                            })}
                        </div>
                    </div>
                    <PostBody body={post.body} />
                </div>
                <CTACard dictionary={dictionary} />
            </div>
        </PaddinContainer>
    );
}

export const getPost = cache(async (slugParams: string, langParams: string) => {
    try {
        const post = await directus.items("post").readByQuery({
            filter: {
                slug: {
                    _eq: slugParams
                }
            },
            fields: ["*", "category.id", "category.title", "author.id", "author.first_name", "author.last_name", "translations.*", "category.translations.*"]
        })

        const Data_Post = post?.data?.[0]

        if (langParams === "en") {
            return Data_Post
        } else if (langParams === "de") {
            return {
                ...Data_Post,
                title: Data_Post.translations.find((post: any) => post.languages_code === "de-DE").title,
                description: Data_Post.translations.find((post: any) => post.languages_code === "de-DE").description,
                body: Data_Post.translations.find((post: any) => post.languages_code === "de-DE").body
            }
        } else {
            return {
                ...Data_Post,
                title: Data_Post.translations.find((post: any) => post.languages_code === "fr-FR").title,
                description: Data_Post.translations.find((post: any) => post.languages_code === "fr-FR").description,
                body: Data_Post.translations.find((post: any) => post.languages_code === "fr-FR").body
            }
        }
    } catch (error) {
        // Error data in /fr and /de path
        notFound()
    }
})
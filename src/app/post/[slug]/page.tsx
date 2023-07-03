import PaddinContainer from "@/components/layouts/padding-container";
import { DUMMY_DATA, socialMedia } from "../../../../DUMMY_DATA";
import { notFound } from "next/navigation";
import PostHero from "@/components/post/post-hero";
import SocialLink from "@/components/elements/social-link";
import { SocialMedia } from "../../../../types/collextion";
import PostBody from "@/components/post/post-body";
import CTACard from "@/components/elements/cta-card";

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
            <div className="space-y-10">
                <PostHero post={post} />
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
                <CTACard />
            </div>
        </PaddinContainer>
    );
}
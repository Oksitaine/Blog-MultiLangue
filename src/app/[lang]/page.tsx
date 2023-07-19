import PaddinContainer from "@/components/layouts/padding-container";
import PostCard from "@/components/post/post-card";
import { DUMMY_DATA } from "../../../DUMMY_DATA";
import PostlistProps from "@/components/post/post-lists";
import CTACard from "@/components/elements/cta-card";
import directus from "../../../lib/directus";
import { notFound } from "next/navigation";
import getDictionary from "../../../lib/getDictionary";

export default async function Home({params} : {params: {lang: string}}) {  

  const getAllPosts = async () => {
    try{
      const posts = await directus.items("post").readByQuery({
        fields: ["*", "author.id", "author.first_name", "author.last_name", "category.id", "category.title", "category.translations.*", "translations.*"]
      });
      if(params.lang === "en"){
        return posts.data
      } else {
        if(params.lang === "fr"){
          return posts.data?.map((post) => { 
            return {
              ...post,
              title: post.translations.find((Localpost : any) => Localpost.languages_code === "fr-FR").title,
              description: post.translations.find((Localpost : any) => Localpost.languages_code === "fr-FR").description
          }})
        } else {
          return posts.data?.map((post) => { 
            return {
              ...post,
              title: post.translations.find((Localpost : any) => Localpost.languages_code === "de-DE").title,
              description: post.translations.find((Localpost : any) => Localpost.languages_code === "de-DE").description
          }})
        }
      }
    }catch(error){
      console.log(error);
      throw new Error(error as string)
    }
  }

  const posts = await getAllPosts();

  if(!posts){
    notFound()
  }

  const dictionary = await getDictionary(params.lang)

  return (
    <PaddinContainer>
      <main className="h-auto pb-10 space-y-20 lg:space-y-10 lg:pb-0">
        <PostCard local={params.lang} post={posts[3]} />
        <PostlistProps
          local={params.lang}
          posts={posts.filter((_post, index) => index == 2 || index == 1)}
          layout="vertical"
        />
        <CTACard dictionary={dictionary} />
        <PostCard local={params.lang} post={posts[0]} reverse={true} />
        <PostlistProps
          local={params.lang}
          posts={posts.filter((_post, index) => index == 2 || index == 3)}
          layout="vertical"
        />
      </main>
    </PaddinContainer>
  )
}

import PaddinContainer from "@/components/layouts/padding-container";
import PostCard from "@/components/post/post-card";
import { DUMMY_DATA } from "../../../DUMMY_DATA";
import PostlistProps from "@/components/post/post-lists";
import CTACard from "@/components/elements/cta-card";
import directus from "../../../lib/directus";
import { notFound } from "next/navigation";

export default async function Home({params} : {params: {lang: string}}) {  

  const getAllPosts = async () => {
    try{
      const posts = await directus.items("post").readByQuery({
        fields: ["*", "author.id", "author.first_name", "author.last_name", "category.id", "category.title"]
      });
      return posts.data;
    }catch(error){
      console.log(error);
      throw new Error("Error fetching posts")
    }
  }
  

  const posts = await getAllPosts();

  if(!posts){
    notFound()
  }

  return (
    <PaddinContainer>
      <main className="h-auto space-y-10">
        <PostCard post={posts[3]} />
        <PostlistProps
          posts={posts.filter((_post, index) => index == 2 || index == 1)}
          layout="vertical"
        />
        <CTACard />
        <PostCard post={posts[0]} reverse={true} />
        <PostlistProps
          posts={posts.filter((_post, index) => index == 2 || index == 3)}
          layout="vertical"
        />
      </main>
    </PaddinContainer>
  )
}

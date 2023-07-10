import PaddinContainer from "@/components/layouts/padding-container";
import PostCard from "@/components/post/post-card";
import Link from "next/link";
import { DUMMY_DATA } from "../../DUMMY_DATA";
import PostlistProps from "@/components/post/post-lists";
import CTACard from "@/components/elements/cta-card";
import supabase from "../../lib/supabase";



export default async function Home() {

  const getAllPosts = async () => {
    try{
      const posts = await supabase.from("category").select("*")
      return posts
    }catch(error){
      throw new Error("Error fetching posts")
    }
  }

  const postss = await getAllPosts()
  console.log("Voici les posts : ");
  console.log(postss);
  

  return (
    <PaddinContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_DATA[3]} />
        <PostlistProps
          posts={DUMMY_DATA.filter((_post, index) => index == 2 || index == 1)}
          layout="vertical"
        />
        <CTACard />
        <PostCard post={DUMMY_DATA[0]} reverse={true} />
        <PostlistProps
          posts={DUMMY_DATA.filter((_post, index) => index == 2 || index == 3)}
          layout="vertical"
        />
      </main>
    </PaddinContainer>
  )
}

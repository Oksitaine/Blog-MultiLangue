import PaddinContainer from "@/components/layouts/padding-container";
import PostCard from "@/components/post/post-card";
import Link from "next/link";
import { DUMMY_DATA } from "../../DUMMY_DATA";
import PostlistProps from "@/components/post/post-lists";
import CTACard from "@/components/elements/cta-card";



export default function Home() {
  return (
    <PaddinContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_DATA[3]}/>
        <PostlistProps 
          posts={DUMMY_DATA.filter((_post, index) => index == 2 || index == 1)} 
          layout="vertical"
        />
        <CTACard/>
        <PostCard post={DUMMY_DATA[0]} reverse={true}/>
        <PostlistProps 
          posts={DUMMY_DATA.filter((_post, index) => index == 2 || index == 3)} 
          layout="vertical"
        />
      </main>
   </PaddinContainer>
  )
}

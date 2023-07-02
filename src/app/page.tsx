import PaddinContainer from "@/components/layouts/padding-container";
import PostCard from "@/components/post/post-card";
import Link from "next/link";
import { DUMMY_DATA } from "../../DUMMY_DATA";
import PostlistProps from "@/components/post/post-lists";



export default function Home() {
  return (
    <PaddinContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_DATA[0]}/>
        <PostlistProps 
          posts={DUMMY_DATA.filter((_post, index) => index == 0 || index == 1)} 
          layout="vertical"
        />
      </main>
   </PaddinContainer>
  )
}

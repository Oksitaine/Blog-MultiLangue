import PaddinContainer from "@/components/layouts/padding-container";
import PostCard from "@/components/post/post-card";
import Link from "next/link";
import { DUMMY_DATA } from "../../DUMMY_DATA";



export default function Home() {
  return (
    <PaddinContainer>
      <main className="h-auto space-y-10">
        <PostCard post={DUMMY_DATA[0]}/>
      </main>
   </PaddinContainer>
  )
}

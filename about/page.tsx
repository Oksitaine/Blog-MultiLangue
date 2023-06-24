import Link from "next/link";





export default function Page(){

    return(
        <>
        <div>
            <h1>About Page</h1>
            <Link href="/" >Return Home</Link>
            <Link href="/about/company" >Return Company</Link>
        </div>
        </>
    )
}
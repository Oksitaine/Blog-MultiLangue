import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const token = request?.nextUrl.searchParams.get("slug")

    if(!token || token !== process.env.ADMIN_TOKEN){
        return NextResponse.json({
            error: "Not Authorisation, token missing",
            status: 401
        })
    }

    revalidatePath(`/[lang]/post/[slug]`)
    revalidatePath(`/[lang]/[category]`)
    revalidatePath(`/[lang]`)

    return NextResponse.json({
        revalidate : "Suuces ! All website is revalidate",
        now : new Date()
    })
}
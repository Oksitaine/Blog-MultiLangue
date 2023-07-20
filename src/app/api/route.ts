import { Welcome } from "@/components/email/Welcome";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import directus from "../../../lib/directus";

type DirectusDataEmail = {
    id : number,
    email : string
}

export async function GET(request: NextRequest){
    const token = request?.nextUrl.searchParams.get("slug")

    if(!token || token !== process.env.ADMIN_TOKEN){
        return NextResponse.json({
            error: "Not Authorisation, token missing",
            status: 401
        })
    }

    const resend = new Resend(process.env.RESEND_TOKEN)

    try {
        const emails = await directus.items("subscribers").readByQuery({
            fields: ["*"]
        });

        emails?.data?.map(async (email : DirectusDataEmail) => {
            const name = email.email.split("@")[0]
            await resend.emails.send(
                {
                    from: "WGlint <onboarding@resend.dev>",
                    to: [email.email],
                    subject: "Hello world 1",
                    react: Welcome({Pseudo: name})
                }
            )
        })

        return NextResponse.json({
            message: "Email is send !",
            statuts: 200,
            emails
        })
    } catch (error) {
        return NextResponse.json({
            error,
            statuts: 400
        })   
    }
}
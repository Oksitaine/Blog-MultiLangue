import { Database } from "./supabasetype";

export interface Post {
    id: string;
    title: string;
    description: string;
    category: {
        id: string;
        title: string;
        slug?: string;
        description?: string;
    };
    author: {
        id: string;
        first_name: string;
        last_name: string;
    };
    slug: string;
    image: string;
    body: string;
    date_created: string;
    updated_at: string;
    translations?: [
        {
            id: number;
            post_id: string;
            languages_code: "fr-FR" | "de-DE";
            title: string;
            description: string;
            body: string;
        }
    ]
}

export interface Category {
    id: string;
    title: string;
    slug: string;
    description?: string;
}

export type SocialMedia = {
    socialname: "twitter" | "linkedin" | "github", 
    link: string,
    CanHaveShareLink: boolean,
    Sharelink: string
}

export type PostSupabse = Database["public"]["Tables"]["Post"]["Row"]



const obj = {
    titre : "Vivelesgays",
    pays: {
        france : "fr",
        japon : "jp"
    }
}

obj.pays["japon"]
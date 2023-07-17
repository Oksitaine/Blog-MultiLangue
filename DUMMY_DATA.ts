import { Category, Post, SocialMedia } from "./types/collextion"

export const DUMMY_DATA : Post[] = [
    {
        id: "1",
        title : "How make money with AIIII",
        description : "This is the first meetup description for the meetup with id 1 and slug first-meetup and title First Meetup",
        category: {
            id: "1",
            title: "Coding"
        },
        author: {
            id: "1",
            first_name: "EL MEDIRI ",
            last_name: "Azdin",
        },
        slug: "money-ai",
        image: "https://img.freepik.com/photos-gratuite/connexion-formes-geometriques-bleues-abstraites-du-plexus-image-generee-par-ai_511042-595.jpg?w=1380&t=st=1688285991~exp=1688286591~hmac=808a4329a4adc003e3f5a363173638cca7e64d1382302c4cc2a737ea07762f20",
        body: "This is the first meetup body text content for the meetup with id 1 and slug first-meetup and title First Meetup",
        date_created: "2021-08-01T12:00:00.000Z",
        updated_at: "2021-08-01T12:00:00.000Z"
    },
    {
        id: "2",
        title : "Make business with AIIII",
        description : "Come her for make money with AIIII and buy a new car and a new house and a new wife and a new life",
        category: {
            id: "2",
            title: "Business"
        },
        author: {
            id: "2",
            first_name: "EL MEDIRI ",
            last_name: "Azdin",
        },
        slug: "business-money",
        image: "https://img.freepik.com/photos-gratuite/riche-homme-heureux-revant-faire-du-shopping-souhaitant-billets-dollar-dans-mains-regardant-cote-pensif-tenant-argent-debout-fond-blanc_1258-88756.jpg?w=1380&t=st=1688287430~exp=1688288030~hmac=b4fbc83eb7284709b2ac7638ec255731a0ff910888762a45e6b9e6507a155d61",
        body: "Come her for make money with AIIII and buy a new car and a new house and a new wife and a new life",
        date_created: "2021-08-01T12:00:00.000Z",
        updated_at: "2021-08-01T12:00:00.000Z"
    },
    {
        id: "3",
        title : "Make business with MAGIC",
        description : "Come her for make money with MAGIC and buy a new car and a new house and a new wife and a new life",
        category: {
            id: "3",
            title: "Business"
        },
        author: {
            id: "3",
            first_name: "EL MEDIRI ",
            last_name: "Azdin",
        },
        slug: "money-magic",
        image: "https://img.freepik.com/photos-gratuite/fond-aurore-boreale-colore-vibrant-ideal-pour-papier-peint_181624-60919.jpg?w=1380&t=st=1688289815~exp=1688290415~hmac=02819ac0b65fb1520477152646a9988418bdd1aa67cd08f11471048368e16c92",
        body: "Come her for make money with MAGIC and buy a new car and a new house and a new wife and a new life",
        date_created: "2021-08-01T12:00:00.000Z",
        updated_at: "2021-08-01T12:00:00.000Z"
    },
    {
        id: "4",
        title : "Come get beautiful Picture with AI",
        description : "Come make best profil picture with AI and buy a new car and a new house and a new wife and a new life",
        category: {
            id: "4",
            title: "Business"
        },
        author: {
            id: "4",
            first_name: "EL MEDIRI ",
            last_name: "Azdin",
        },
        slug: "headshot-ai",
        image: "https://img.freepik.com/photos-gratuite/materiel-eclairage-professionnel-plateau-tournage-fumee-dans-air_1268-17216.jpg?w=1380&t=st=1688289911~exp=1688290511~hmac=f47b1d378afa4d5bf0bff19bae7857b5f8b6102ed93e594275933c754d6948ac",
        body: "Come her for make money with MAGIC and buy a new car and a new house and a new wife and a new life",
        date_created: "2021-08-01T12:00:00.000Z",
        updated_at: "2021-08-01T12:00:00.000Z"
    },
    {
        id: "5",
        title : "New TEST",
        description : "Car and a new house and a new wife and a new life",
        category: {
            id: "5",
            title: "Business"
        },
        author: {
            id: "5",
            first_name: "EL MEDIRI ",
            last_name: "Azdin",
        },
        slug: "headshot-ai",
        image: "https://img.freepik.com/photos-gratuite/materiel-eclairage-professionnel-plateau-tournage-fumee-dans-air_1268-17216.jpg?w=1380&t=st=1688289911~exp=1688290511~hmac=f47b1d378afa4d5bf0bff19bae7857b5f8b6102ed93e594275933c754d6948ac",
        body: "Come her for make money with MAGIC and buy a new car and a new house and a new wife and a new life",
        date_created: "2021-08-01T12:00:00.000Z",
        updated_at: "2021-08-01T12:00:00.000Z"
    }
]

export const DUMMY_CATEGORIES : Category[] = [
    {
        id: "1",
        title: "Coding",
        slug: "coding",
        description: "This is the coding category"
    },
    {
        id: "2",
        title: "Business",
        slug: "business",
        description: "This is the business category"
    }
]

export const socialMedia : SocialMedia[] = [
    {
        socialname : "twitter",
        link : "https://twitter.com/Azdinmediri",
        CanHaveShareLink : true,
        Sharelink : `https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}`
    },
    {
        socialname : "linkedin",
        link : "https://www.linkedin.com/in/azdinmediri/",
        CanHaveShareLink : true,
        Sharelink : `https://linkedin.com/intent/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_SITE_URL}`
    },
    {
        socialname : "github",
        link : "https://github.com/WGlint",
        CanHaveShareLink : false,
        Sharelink : ""
    }
]
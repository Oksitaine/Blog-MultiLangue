import { Category, Post } from "./types/collextion"

export const DUMMY_DATA : Post[] = [
    {
        id: "1",
        title : "First Meetup",
        description : "This is the first meetup description for the meetup with id 1 and slug first-meetup and title First Meetup",
        category: {
            id: "1",
            title: "Coding"
        },
        author: {
            id: "1",
            first_name: "John",
            last_name: "Doe",
        },
        slug: "first-meetup",
        image: "https://img.freepik.com/photos-gratuite/connexion-formes-geometriques-bleues-abstraites-du-plexus-image-generee-par-ai_511042-595.jpg?w=1380&t=st=1688285991~exp=1688286591~hmac=808a4329a4adc003e3f5a363173638cca7e64d1382302c4cc2a737ea07762f20",
        body: "This is the first meetup body text content for the meetup with id 1 and slug first-meetup and title First Meetup",
        created_at: "2021-08-01T12:00:00.000Z",
        updated_at: "2021-08-01T12:00:00.000Z"
    }
]

export const DUMMY_CATEGORIES : Category[] = [
    {
        id: "1",
        title: "Coding",
        slug: "coding",
        description: "This is the coding category"
    }
]
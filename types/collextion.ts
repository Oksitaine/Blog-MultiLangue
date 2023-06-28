export interface Post {
    id: string;
    title: string;
    description: string;
    category: Category;
    author: Author;
    slug: string;
    image: string;
    body: string;
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: string;
    title: string;
    slug?: string;
    description?: string;
}

export interface Author {
    id: string;
    first_name: string;
    last_name: string;
}
export interface Project {
    id: Number;
    title: string;
    img: string;
    description: string;
    date: string;
    link: string;
    content: Promise<[]>;
}
export interface Blog {
    id: string,
    title: string,
    shortDescription: string,
    author: string,
    content: { text: string, image: string }[],
    publishedDate: string,
};
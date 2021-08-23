export interface Blog {
    id: number,
    title: string,
    shortDescription: string,
    author: string,
    content: { text: string, image: string }[],
    publishedDate: string,
};
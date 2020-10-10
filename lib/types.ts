export type RawComment = { postId: number; body: string };
export type Comment = RawComment & { id: number };
export type RawPost = { title: string; body: string };
export type PostType = RawPost & {
    id: number;
    comments: Comment[];
};
export type Posts = PostType[];
export type Id = { id: number };
export type Ids = Id[];

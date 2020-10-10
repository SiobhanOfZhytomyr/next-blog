export type RawComment = { postId: number; body: string };
export type Comment = RawComment & { id: number };
export type PostType = {
  title: string;
  body: string;
  id: number;
  comments: Comment[];
};
export type Posts = PostType[];
export type Id = { id: number };
export type Ids = Id[];
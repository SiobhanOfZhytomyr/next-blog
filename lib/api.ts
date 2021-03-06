import axios from 'axios';
import { Posts } from './types';
import { Ids, RawComment, RawPost, Comment } from './types';

export const getPosts = async (): Promise<any> => {
    const res = await axios.get(`https://simple-blog-api.crew.red/posts`);
    const ids: Ids = res.data.map((post) => post.id);
    return await Promise.all<Posts>(
        ids.map(async (elem) => {
            const content = await axios({
                method: 'GET',
                url: `https://simple-blog-api.crew.red/posts/${elem}`,
                params: {
                    _embed: 'comments',
                },
            });
            return content.data;
        }),
    );
};

export const postComment = (comment: RawComment): Promise<Comment> => {
    return axios({
        method: 'POST',
        url: 'https://simple-blog-api.crew.red/comments',
        data: {
            ...comment,
        },
    }).then((res) => res.data);
};

export const postPost = (post: RawPost): Promise<any> => {
    return axios({
        method: 'POST',
        url: 'https://simple-blog-api.crew.red/posts',
        data: {
            ...post,
        },
    }).then((res) => res.data);
};

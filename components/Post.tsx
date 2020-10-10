import { PostType } from '../lib/types';
import Link from 'next/link';

export function Post(post: PostType): JSX.Element {
    return (
        <div>
            <h1>
                {post.title}, id - {post.id}
            </h1>
            <p>{post.body}</p>
            <pre>{JSON.stringify(post.comments)}</pre>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </div>
    );
}

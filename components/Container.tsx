import { Posts } from '../lib/types';
import { Highlight } from './Highlight';
export function Container(props: { posts: Posts }): JSX.Element {
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {props.posts.map((post) => (
                    <li key={post.id}>
                        <Highlight id={post.id} body={post.body} title={post.title} comments={post.comments} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

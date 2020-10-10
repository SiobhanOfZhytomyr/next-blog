import { Posts } from '../lib/types';
import { Highlight } from './Highlight';
import { List, ListItem } from './commonStyles';
export function Container(props: { posts: Posts }): JSX.Element {
    return (
        <div>
            <List>
                {props.posts.map((post) => (
                    <ListItem key={post.id}>
                        <Highlight id={post.id} body={post.body} title={post.title} comments={post.comments} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

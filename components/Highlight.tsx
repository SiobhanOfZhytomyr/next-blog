import Link from 'next/link';

import { PostType } from '../lib/types';
import { Container, Header, Link as StyledLink } from './commonStyles';
export function Highlight(post: PostType): JSX.Element {
    return (
        <Container>
            <Header>{post.title}</Header>
            <Header>
                <Link href={`/posts/${post.id}`}>
                    <StyledLink>Explore</StyledLink>
                </Link>
            </Header>
        </Container>
    );
}

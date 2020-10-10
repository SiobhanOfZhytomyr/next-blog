import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { Container } from '../components/Container';
import { getAllPosts, State } from '../redux/store/store';
import { getPosts } from '../lib/api';
import { Posts } from '../lib/types';


function HomePage(props: { data: Posts }): JSX.Element {
    const posts = useSelector((state: State) => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        const handlePopulate = () => {
            if (props.data.length !== posts.length) dispatch(getAllPosts(props.data));
        };
        handlePopulate();
    }, []);
    return (
        <div>
            <Link href="/posts/new">
                <a>Create new post</a>
            </Link>
            <Container posts={props.data} />
        </div>
    );
}

HomePage.getInitialProps = async () => {
    const data = await getPosts();
    return { data };
};

export default HomePage;

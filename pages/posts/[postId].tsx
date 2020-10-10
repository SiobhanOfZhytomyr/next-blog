import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { State, createComment } from '../../redux/store/store';
export default function Post(): JSX.Element {
    const router = useRouter();
    const { postId } = router.query;
    const num: number = +postId;
    const [body, setBody] = useState('');
    const data = useSelector((state: State) => state.posts.find((post) => post.id === num));
    const apiError = useSelector((state: State) => state.error);
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createComment({ postId: num, body }));
        setBody('');
    };
    return (
        <div>
            {apiError && <p>{apiError}</p>}
            <h1>
                {data.title}, id - {data.id}
            </h1>
            <p>{data.body}</p>
            {!data.comments.length ? (
                <p>No comments yet</p>
            ) : (
                <ul>
                    {data.comments.map((comment) => (
                        <li key={comment.id}>{comment.body}</li>
                    ))}
                </ul>
            )}
            <form onSubmit={handleSubmit}>
                <p>Leave a comment</p>
                <div>
                    <input
                        value={body}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBody(e.target.value)}
                    />
                </div>
                <button type="submit">Create new comment</button>
            </form>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </div>
    );
}

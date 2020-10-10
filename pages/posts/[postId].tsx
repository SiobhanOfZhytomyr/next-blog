import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { State, createComment } from '../../redux/store/store';
import { CContainer,Container,Header, List, ListItem, Paragraph } from '../../components/commonStyles';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import { Form, FormInput, Button, FormContainer, FormHeader } from '../../components/Forms/Forms.elements';

export default function Post(): JSX.Element {
    const router = useRouter();
    const { postId } = router.query;
    const num: number = +postId;
    const [body, setBody] = useState('');
    const data = useSelector((state: State) => state.posts.find((post) => post.id === num));
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createComment({ postId: num, body }));
        setBody('');
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setBody(e.target.value);
    return (
        <div>
            <Navbar />
            <CContainer>
                <Header>{data.title}</Header>
                <Paragraph>{data.body}</Paragraph>
                {!data.comments.length ? (
                    <p>No comments yet</p>
                ) : (
                    <>
                    <Header>Comments:</Header>
                    <List>
                        {data.comments.map((comment) => (
                            <ListItem key={comment.id}>{comment.body}</ListItem>
                        ))}
                    </List>
                    </>
                )}
                <FormContainer>
                    <FormHeader>Leave a comment</FormHeader>
                    <Form onSubmit={handleSubmit}>
                        <FormInput
                            name="body"
                            type="text"
                            placeholder="Content of the comment"
                            value={body}
                            onChange={handleChange}
                        />
                        <Button type="submit">Comment</Button>
                    </Form>
                </FormContainer>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </CContainer>
            <Footer />
        </div>
    );
}

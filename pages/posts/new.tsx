import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createPost } from '../../redux/store/store';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import { Form, FormInput, Button, FormContainer } from '../../components/Forms/Forms.elements';

export default function CreatePost(): JSX.Element {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createPost({ title, body }));
        setBody('');
        setTitle('');
    };
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const handleBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => setBody(e.target.value);
    return (
        <>
            <Navbar />
            <FormContainer>
                <Form>
                    <FormInput placeholder="Title of the post" value={title} onChange={handleTitleChange} />
                    <FormInput placeholder="Content of the post" value={body} onChange={handleBodyChange} />
                    <Button onClick={handleSubmit}>Post</Button>
                </Form>
            </FormContainer>
            <Footer />
        </>
    );
}

import { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { createPost } from "../../redux/store/store";
export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createPost({ title, body }));
    setBody("");
    setTitle("");
  };
  return (
    <>
      <div>Create new post here</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="title">Body</label>
          <input
            value={body}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBody(e.target.value)
            }
          />
        </div>
        <button type="submit">Create new post</button>
      </form>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  );
}

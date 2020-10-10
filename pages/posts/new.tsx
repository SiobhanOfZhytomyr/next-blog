import { useState } from "react";
import axios from "axios";
import Link from "next/link";
export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postData = async () => {
      try {
        const res = await axios({
          method: "POST",
          url: "https://simple-blog-api.crew.red/posts",
          data: {
            title,
            body,
          },
        });
        console.log(res);
        setBody("");
        setTitle("");
      } catch (e) {
        console.log(e);
      }
    };

    postData();
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

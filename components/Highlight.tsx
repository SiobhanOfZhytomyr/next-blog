import { PostType } from "../lib/types";
import Link from "next/link";

export function Highlight(post: PostType) {
  return (
    <div>
      <h1>
        {post.title}, id - {post.id}
      </h1>
      <h2>
        <Link href={`/posts/${post.id}`}>
          <a>Explore</a>
        </Link>
      </h2>
    </div>
  );
}

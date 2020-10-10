import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../components/Container";
import { getAllPosts, State } from "../redux/store/store";
import Link from "next/link";
import {getPosts} from '../lib/api'

function HomePage({ data }) {
  const posts = useSelector((state: State) => state.posts)
  const dispatch = useDispatch();
  useEffect(() => {
    const handlePopulate = () => {
      if (data.length !== posts.length) dispatch(getAllPosts(data));
    };
    handlePopulate();
  }, []);
  return (
    <div>
      <Link href="/posts/new">
        <a>Create new post</a>
      </Link>
      <Container posts={data} />
    </div>
  );
}

HomePage.getInitialProps = async ({ ctx }) => {
  const data = await getPosts()
  return { data };
};

export default HomePage;

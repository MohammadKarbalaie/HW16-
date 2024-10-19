import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IPost } from '../types';

const fetchPosts = async (page: number) => {
  const { data } = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${page * 10}`);
  return data;
};

const Posts = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading, isError } = useQuery(['posts', page], () => fetchPosts(page));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul>
        {data.posts.map((post: IPost) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <div className="p-4 border rounded-lg shadow-sm hover:bg-gray-100">
                <h2 className="font-semibold">{post.title}</h2>
                <p className="truncate">{post.body}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Load More
      </button>
    </div>
  );
};

export default Posts;

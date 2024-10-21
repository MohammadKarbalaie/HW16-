import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchPosts } from '../api/post.api';      
import PostCard from '../components/PostCard';
import { IPost } from '../types';

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
          <li key={post.id} className='py-2 w-[500px]'>
            <PostCard post={post} /> 
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

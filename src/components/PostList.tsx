import { Link } from 'react-router-dom';
import { IPost } from '../types';

interface PostListProps {
  posts: IPost[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <ul>
      {posts.map((post: IPost) => (
        <li key={post.id} className='py-2 w-[500px]'>
          <Link to={`/posts/${post.id}`}>
            <div className="p-4 border rounded-lg shadow-sm hover:bg-gray-100">
              <h2 className="font-semibold">{post.title}</h2>
              <p className="truncate">{post.body}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;

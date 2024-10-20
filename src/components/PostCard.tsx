import { IPost } from '../types';
import { Link } from 'react-router-dom';

interface PostCardProps {
  post: IPost;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="p-4 my-4 border rounded-lg shadow-sm hover:bg-gray-100">
      <Link to={`/posts/${post.id}`}>
        <h3 className="font-semibold text-lg">{post.title}</h3>
      </Link>
      <p className="text-sm truncate max-w-full">{post.body}</p> 
    </div>
  );
};

export default PostCard;

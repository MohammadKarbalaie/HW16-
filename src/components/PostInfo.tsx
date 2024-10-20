import { AiFillDislike, AiFillLike, AiTwotoneEye, AiTwotoneTags } from "react-icons/ai";

interface PostInfoProps {
  post: {
    title: string;
    body: string;
    reactions: { likes: number, dislikes: number };
    tags: string[];
    views: number;
  };
}

const PostInfo = ({ post }: PostInfoProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 capitalize">{post.title}</h1>
      <p>{post.body}</p>

      <div className='flex gap-8'>
        <div className='flex gap-6 my-4'>
          <p className='flex gap-4'><span className='text-xl'><AiFillLike /></span><span>{post.reactions.likes}</span></p>
          <p className='flex gap-4'><span className='text-xl'><AiFillDislike /></span><span>{post.reactions.dislikes}</span></p>
          <p className='flex gap-4'><span className='text-xl'><AiTwotoneTags /></span><span>{post.tags.join(", ")}</span></p>
          <p className='flex gap-4'><span className='text-xl'><AiTwotoneEye /></span><span>{post.views}</span></p>
        </div>
      </div>
    </div>
  );
};

export default PostInfo;

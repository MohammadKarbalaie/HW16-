import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AiFillDislike, AiFillLike, AiOutlineComment, AiTwotoneEye, AiTwotoneTags } from "react-icons/ai";
import { fetchPostDetails, fetchPostComments } from '../api/post.api'; 
import { IComment } from '../types';

const PostDetails = () => {
  const { postId } = useParams(); 
  const { data, isLoading, isError } = useQuery(['post', postId], () => fetchPostDetails(postId!));
  
  const [showComments, setShowComments] = useState(false);

  // get comments  
  const { data: comments, isLoading: isCommentsLoading, isError: isCommentsError, refetch } = useQuery(
    ['comments', postId],
    () => fetchPostComments(postId!),
    { enabled: false }
  );

  const handleShowComments = () => {
    setShowComments((prev) => !prev);
    if (!showComments) {
      refetch();
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading post details</div>;

  return (
    <div className='border px-4 py-2 rounded-xl w-[800px] mx-auto bg-white'>
      <h1 className="text-2xl font-bold mb-4 capitalize">{data.title}</h1>
      <p>{data.body}</p>

      <div className='flex gap-8'>
        <div className='flex gap-6 my-4'>
          <p className='flex gap-4'><span className='text-xl'><AiFillLike /></span><span>{data.reactions.likes}</span></p>
          <p className='flex gap-4'><span className='text-xl'><AiFillDislike /></span><span>{data.reactions.dislikes}</span></p>
          <p className='flex gap-4'><span className='text-xl'><AiTwotoneTags /></span><span>{data.tags + ""}</span></p>
          <p className='flex gap-4'><span className='text-xl'><AiTwotoneEye /></span><span>{data.views}</span></p>
        </div>
        <button className="mt-0 text-gray-500  rounded" onClick={handleShowComments}>
          <div className='flex gap-2'>
            <AiOutlineComment className='mt-[3px] text-xl' />
            {showComments ? 'Hide Comments' : 'Show Comments'}
          </div>
        </button>
      </div>

      {showComments && (
        <div className="mt-4">
          {isCommentsLoading && <div>Loading comments...</div>}
          {isCommentsError && <div>Error loading comments</div>}
          {comments && (
            <ul>
              {comments.map((comment: IComment) => (
                <li key={comment.id} className=" py-2">
                  <p className='py-2 bg-blue-500 w-96 text-white px-4 rounded-xl'><strong className='capitalize'>{comment.user.username}:</strong> {comment.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default PostDetails;

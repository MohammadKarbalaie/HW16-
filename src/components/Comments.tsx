import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchPostComments } from '../api/post.api';
import { AiOutlineComment } from "react-icons/ai";
import { IComment } from '../types';

interface CommentsProps {
  postId: string;
}

const Comments = ({ postId }: CommentsProps) => {
  const [showComments, setShowComments] = useState(false);

  const { data: comments, isLoading, isError, refetch } = useQuery(
    ['comments', postId],
    () => fetchPostComments(postId),
    {
      enabled: false,
    }
  );

  const handleShowComments = () => {
    setShowComments((prev) => !prev);
    if (!showComments) {
      refetch(); 
    }
  };

  return (
    <div>
      <button className="mt-0 text-gray-500  rounded" onClick={handleShowComments}>
        <div className='flex gap-2'>
          <AiOutlineComment className='mt-[3px] text-xl' />
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </div>
      </button>

      {showComments && (
        <div className="mt-4">
          {isLoading && <div>Loading comments...</div>}
          {isError && <div>Error loading comments</div>}
          {comments && (
            <ul>
              {comments.map((comment: IComment) => (
                <li key={comment.id} className=" py-2">
                  <p className='py-2  bg-blue-500 w-96 text-white px-4 rounded-xl'>
                    <strong className='capitalize'>{comment.user.username}:</strong> {comment.body}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Comments;

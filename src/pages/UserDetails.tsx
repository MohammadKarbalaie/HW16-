import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchUserPosts } from '../api/post.api'; 
import { fetchUserDetails } from '../api/user.api';   
import PostCard from '../components/PostCard'; 
import { IPost } from '../types';

const UserDetails = () => {
  const { userId } = useParams(); 

 
  const { data: user, isLoading: isUserLoading, isError: isUserError } = useQuery(
    ['user', userId],
    () => fetchUserDetails(Number(userId)) 
  );


  const { data: posts, isLoading: isPostsLoading, isError: isPostsError } = useQuery(
    ['userPosts', userId],
    () => fetchUserPosts(Number(userId)) 
  );

  if (isUserLoading || isPostsLoading) return <div className='text-white'>Loading...</div>;
  if (isUserError || isPostsError) return <div className='text-white'>Error loading user or posts</div>;

  return (
    <div className="user-details">
      <h1 className="flex items-center gap-4 text-2xl font-bold mb-4">
        <img src={user.image} alt={user.firstName} />
        <p>{user.firstName} {user.lastName}</p>
      </h1>

      <h2 className="text-xl mb-2">Posts by {user.firstName}:</h2>
      {posts.length === 0 ? (
        <p className="text-black">no posts.</p>
      ) : (
        <ul>
          {posts.map((post: IPost) => (
            <li key={post.id} className='bg-white rounded-xl'>
              <PostCard post={post} /> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserDetails;

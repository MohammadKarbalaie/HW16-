import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchUserPosts } from '../api/post.api'; 
import { fetchUserDetails } from '../api/user.api';   
import PostCard from '../components/PostCard'; 
import { IPost } from '../types';

const UserDetails = () => {
  const { userId } = useParams(); 

  //get user details
  const { data: user, isLoading: isUserLoading, isError: isUserError } = useQuery(
    ['user', userId],
    () => fetchUserDetails(userId!)
  );

  // get user post
  const { data: posts, isLoading: isPostsLoading, isError: isPostsError } = useQuery(
    ['userPosts', userId],
    () => fetchUserPosts(userId!)
  );

  if (isUserLoading || isPostsLoading) return <div>Loading...</div>;
  if (isUserError || isPostsError) return <div>Error loading user or posts</div>;

  return (
    <div className="user-details">
      <h1 className="text-2xl font-bold mb-4">{user.firstName} {user.lastName}</h1>

      {/* list user posts*/}
      <h2 className="text-xl mb-2">Posts by {user.firstName}:</h2>
      <ul>
        {posts.map((post:IPost) => (
          <li key={post.id}>
            <PostCard post={post} /> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;

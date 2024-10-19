import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { IPost } from '../types';

const fetchUserDetails = async (userId: string) => {
  const { data } = await axios.get(`https://dummyjson.com/users/${userId}`);
  return data;
};

const fetchUserPosts = async (userId: string) => {
  const { data } = await axios.get(`https://dummyjson.com/users/${userId}/posts`);
  return data.posts;
};

const UserDetails = () => {
  const { userId } = useParams(); 

 
  const { data: userDetails, isLoading: isUserLoading, isError: isUserError } = useQuery(['user', userId], () => fetchUserDetails(userId!));


  const { data: userPosts, isLoading: isPostsLoading, isError: isPostsError } = useQuery(['userPosts', userId], () => fetchUserPosts(userId!), {
    enabled: !!userId,  
  });

  if (isUserLoading) return <div>Loading user details...</div>;
  if (isUserError) return <div>Error loading user details</div>;

  if (isPostsLoading) return <div>Loading user's posts...</div>;
  if (isPostsError) return <div>Error loading user's posts</div>;

  return (
    <div>
      <div className='flex items-center'>
      <img src={userDetails.image} alt="" className='w-16 mr-4' />
      <h1 className="text-2xl font-bold my-4">{userDetails.firstName} {userDetails.lastName}</h1>
      </div>
      <p>Email: {userDetails.email}</p>
      <p>Phone: {userDetails.phone}</p>

      <h2 className="text-xl font-semibold mt-6">User's Posts</h2>
      <ul>
        {userPosts.length > 0 ? (
          userPosts.map((post: IPost) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <div className="w-96 p-4 border rounded-lg shadow-sm hover:bg-gray-100">
                  {post.title}
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p>No posts available for this user.</p>
        )}
      </ul>
    </div>
  );
};

export default UserDetails;

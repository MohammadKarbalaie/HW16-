import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { IUser } from '../types';

const fetchUsers = async ({ pageParam = 0 }) => {
  const { data } = await axios.get(`https://dummyjson.com/users?limit=10&skip=${pageParam * 10}`);
  console.log({data});
  
  return data;
};

const UsersList = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('users', fetchUsers, {
    getNextPageParam: (lastPage) => {
      const morePagesExist = lastPage.users.length === 10;
      if (!morePagesExist) return undefined;

      return lastPage.skip / lastPage.limit + 1; 
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading users</div>;

  return (
    <div className='w-[1420px] mx-auto h-[85vh] overflow-y-auto'>
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <ul>
        {data?.pages.map((page, pageIndex) => (
          <div key={pageIndex} className='w-9/12 grid grid-cols-2 gap-4 items-center justify-center mx-auto'>
            {page.users.map((user: IUser) => (
              <li key={user.id} >
                <Link to={`/users/${user.id}`}>
                  <div className=" w-96 flex items-center justify-center p-4 border rounded-lg shadow-sm hover:bg-gray-100">
                    <div className='w-10'>
                      <img src={user.image} alt={user.lastName} />
                    </div>
                    <div className='w-full ml-3'>
                      <p className='font-semibold text-xl'>{user.firstName} {user.lastName}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </div>
        ))}
      </ul>
      {isFetchingNextPage && <div>Loading more...</div>}
      {!hasNextPage && <div>No more users to load</div>}
    </div>
  );
};

export default UsersList;

import { useEffect } from 'react';
import UserCard from '../components/UserCard';
import { useUsers } from '../Hooks/useUsers';
import { IUser } from '../types';

const UsersList = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useUsers();

// Add infinite scroll
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
    <div className='w-[1420px] mx-auto h-auto'>
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <ul>
        {data?.pages.map((page, pageIndex) => (
          <div key={pageIndex} className='w-9/12 grid grid-cols-2 gap-4 items-center justify-center mx-auto'>
            {page.users.map((user: IUser) => (
              <UserCard key={user.id} user={user} />
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

import { useInfiniteQuery } from 'react-query';
import { fetchUsers } from '../api/user.api';

export const useUsers = () => {
  return useInfiniteQuery('users', fetchUsers, {
    getNextPageParam: (lastPage) => {
      const morePagesExist = lastPage.users.length === 10;
      if (!morePagesExist) return undefined;

      return lastPage.skip / lastPage.limit + 1;
    },
  });
};

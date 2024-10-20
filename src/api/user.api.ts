import { generateClient } from './client';
import { urls } from './urls';

const client = generateClient();


export const fetchUsers = async ({ pageParam = 0 }) => {
  const response = await client.get(urls.users.list(pageParam));
  return response.data;
};


export const fetchUserDetails = async (userId: string) => {
  const response = await client.get(urls.users.details(userId));
  return response.data;
};

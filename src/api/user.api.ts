import { generateClient } from './client';
import { urls } from './urls';

const client = generateClient();


export const fetchUsers = async ({ pageParam = 0 }) => {
  const response = await client.get(urls.users.list(pageParam));
  return response.data;
};


export const fetchUserDetails = async (userId: number) => {
  const response = await client.get(urls.users.details(userId));
  console.log(response.data)
  return response.data;
};

import { generateClient } from './client';
import { urls } from './urls';

const client = generateClient();

export const fetchPosts = async (page: number) => {
    const { data } = await client.get(urls.posts.list(page));
    return data;
  };

export const fetchPostDetails = async (postId: number) => {
  const { data } = await client.get(urls.posts.details(postId));
  return data;
};

export const fetchPostComments = async (postId: number) => {
  const { data } = await client.get(urls.comments.byPost(postId));
  return data.comments;
};

export const fetchUserPosts = async (userId: number) => {
    const { data } = await client.get(urls.posts.userPosts(userId));
    return data.posts; // listi az postha ra barmigardone
  };
export const urls = {
    posts: {
      list: (page: number) => `/posts?limit=10&skip=${page * 10}`,
      details: (postId: string) => `/posts/${postId}`,
      userPosts: (userId: string) => `/users/${userId}/posts`, // post by users
    },
    users: {
      list: (pageParam: number) => `/users?limit=10&skip=${pageParam * 10}`,
      details: (userId: string) => `/users/${userId}`,
    },
    comments: {
      list: "/comments",
      byPost: (postId: string) => `/posts/${postId}/comments`,
    },
  };
  
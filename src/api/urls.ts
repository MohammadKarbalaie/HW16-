export const urls = {
    posts: {
      list: (page: number) => `/posts?limit=10&skip=${page * 10}`,
      details: (postId: number) => `/posts/${postId}`,
      userPosts: (userId: number) => `/users/${userId}/posts`, // post by users
    },
    users: {
      list: (pageParam: number) => `/users?limit=10&skip=${pageParam * 10}`,
      details: (userId: number) => `/users/${userId}`,
    },
    comments: {
      list: "/comments",
      byPost: (postId: number) => `/posts/${postId}/comments`,
    },
  };
  
export type Like = {
  id: number;
  createdAt: string;
  userId: number;
  postId: number;
};

export type Post = {
  id: number;
  updatedAt: string;
  createdAt: string;
  titlePost: string;
  userId: number;
  likes: Array<Like>;
  likeCount: number;
};

export type PostRes = {
  totalPosts: number;
  currentPage: number;
  lastPage: number;
  posts: Array<Post>;
};

export type Comment = {
  commentId: number;
  date: Date;
  content: string;
  hasChildren: boolean; // * Is this needed?
  child: Comment;

  // ! Stopped at modeling comment type to mock data for Post.tsx.

}



export type PostObject = {
  postId: number;
  date: Date;
  title: string;
  upvoteCount: number;
  content: string;
  comments: Comment[]
};

export const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // const array: number[] = [
  // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  // 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  // 23, 24, 25, 26, 27, 28, 29, 30
  // ];


export const postArr: PostObject[] = [
  {
    postId: 0,
    title: "Alert system for AWS charges.",
    upvoteCount: 132,
  },
  {
    postId: 1,
    title: "Alert system for AWS charges.",
    upvoteCount: 120,
  },
  {
    postId: 2,
    title: "Alert system for AWS charges.",
    upvoteCount: 100,
  },
  {
    postId: 3,
    title: "Alert system for AWS charges.",
    upvoteCount: 84,
  },
  {
    postId: 4,
    title: "Alert system for AWS charges.",
    upvoteCount: 32,
  },
  {
    postId: 5,
    title: "Alert system for AWS charges.",
    upvoteCount: 3,
  },
  // {
  //   postId: 2,
  //   title: "Alert system for AWS charges.",
  //   upvoteCount: 100,
  // },
  // {
  //   postId: 3,
  //   title: "Alert system for AWS charges.",
  //   upvoteCount: 84,
  // },
  // {
  //   postId: 4,
  //   title: "Alert system for AWS charges.",
  //   upvoteCount: 32,
  // },
  // {
  //   postId: 5,
  //   title: "Alert system for AWS charges.",
  //   upvoteCount: 3,
  // },
  // {
  //   postId: 2,
  //   title: "Alert system for AWS charges.",
  //   upvoteCount: 100,
  // },
  // {
  //   postId: 3,
  //   title: "Alert system for AWS charges.",
  //   upvoteCount: 84,
  // },
  // {
  //   postId: 4,
  //   title: "Alert system for AWS charges.",
  //   upvoteCount: 32,
  // },
  // {
  //   postId: 5,
  //   title: "Alert system for AWS charges.",
  //   upvoteCount: 3,
  // },
];
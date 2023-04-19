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
  date: number;
  title: string;
  upvoteCount: number;
  content: string;
  comments: Comment[] | null; // * Array of parent replies, children are linked to parent.
};

export const postArr: PostObject[] = [
  {
    postId: 0,
    date: currentDate,
    title: "Alert system for AWS charges.",
    upvoteCount: 132,
    content: "Contents of Post",
    comments: null
  },
  {
    postId: 1,
    date: currentDate,
    title: "Alert system for AWS charges.",
    upvoteCount: 132,
    content: "Contents of Post",
    comments: null
  },
  {
    postId: 2,
    date: currentDate,
    title: "Alert system for AWS charges.",
    upvoteCount: 132,
    content: "Contents of Post",
    comments: null
  },
  {
    postId: 3,
    date: currentDate,
    title: "Alert system for AWS charges.",
    upvoteCount: 132,
    content: "Contents of Post",
    comments: null
  },
  {
    postId: 4,
    date: currentDate,
    title: "Alert system for AWS charges.",
    upvoteCount: 132,
    content: "Contents of Post",
    comments: null
  },
  {
    postId: 5,
    date: currentDate,
    title: "Alert system for AWS charges.",
    upvoteCount: 132,
    content: "Contents of Post",
    comments: null
  },
  {
    postId: 6,
    date: currentDate,
    title: "Alert system for AWS charges.",
    upvoteCount: 132,
    content: "Contents of Post",
    comments: null
  },
  {
    postId: 7,
    date: currentDate,
    title: "Alert system for AWS charges.",
    upvoteCount: 132,
    content: "Contents of Post",
    comments: null
  },
];
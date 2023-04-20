export type Comment = {
  commentId: number;
  user: string;
  date: number;
  content: string;
  child: Comment[] | null;
}


const currentDate: number = Date.now();

export const CommentArray: Comment[] = [
  {
    commentId: 0,
    user: "nslee333",
    date: currentDate,
    content: "Hello world!",
    child: null
  },
  {
    commentId: 0,
    user: "nslee333",
    date: currentDate,
    content: "Hello world!",
    child: null
  },
  {
    commentId: 0,
    user: "nslee333",
    date: currentDate,
    content: "Hello world!",
    child: null
  },
  {
    commentId: 0,
    user: "nslee333",
    date: currentDate,
    content: "Hello world!",
    child: null
  },
  {
    commentId: 0,
    user: "nslee333",
    date: currentDate,
    content: "Hello world!",
    child: null
  },
];


export const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


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
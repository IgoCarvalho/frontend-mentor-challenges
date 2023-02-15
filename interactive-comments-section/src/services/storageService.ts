import type { CommentData } from '../types/comment';
import type { User } from '../types/user';

interface AppStorage {
  comments: CommentData[];
}

const COMMENTS_KEY = '@APP_COMMENTS';

const INITIAL_STORAGE: AppStorage = {
  comments: [],
};

export function getComments() {
  const data = localStorage.getItem(COMMENTS_KEY);

  if (!data) {
    return INITIAL_STORAGE;
  }

  return JSON.parse(data) as AppStorage;
}

function saveComment(newComment: CommentData) {
  const storageData = getComments();

  storageData.comments.push(newComment);

  localStorage.setItem(COMMENTS_KEY, JSON.stringify(storageData));
}

function saveAllComments(comments: CommentData[]) {
  const storageData = getComments();

  storageData.comments = comments;

  localStorage.setItem(COMMENTS_KEY, JSON.stringify(storageData));
}

export function createComment(author: User, text: string) {
  const now = Date.now();

  const newComment: CommentData = {
    id: now,
    createdAt: now.toString(),
    content: text,
    replies: [],
    score: 0,
    user: author,
  };

  saveComment(newComment);

  return newComment;
}

export function deleteComment(commentId: number) {
  const { comments } = getComments();

  const filteredComments = comments.filter((comment) => comment.id !== commentId);

  saveAllComments(filteredComments);
}

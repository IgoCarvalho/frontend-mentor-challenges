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

export function setComments(comments: CommentData[]) {
  const storageData = getComments();

  storageData.comments = comments;

  localStorage.setItem(COMMENTS_KEY, JSON.stringify(storageData));
}

function createComment(author: User, text: string, replyingTo?: string) {
  const now = Date.now();

  const newComment: CommentData = {
    id: now,
    createdAt: now.toString(),
    content: text,
    replies: [],
    replyingTo,
    score: 0,
    user: author,
  };

  return newComment;
}

export function addComment(author: User, text: string) {
  const newComment = createComment(author, text);

  saveComment(newComment);

  return newComment;
}

export function deleteComment(commentId: number) {
  const { comments } = getComments();

  const filteredComments = comments.filter((comment) => comment.id !== commentId);

  setComments(filteredComments);
}

function saveReply(commentId: number, reply: CommentData) {
  const { comments } = getComments();

  const updatedComments = comments.map((comment) => {
    if (comment.id !== commentId) return comment;

    comment.replies.push(reply);

    return comment;
  });

  setComments(updatedComments);

  return updatedComments;
}

export function addReply(author: User, text: string, replyingTo: string, commentId: number) {
  const newComment = createComment(author, text, replyingTo);

  const updatedComments = saveReply(commentId, newComment);

  return updatedComments;
}

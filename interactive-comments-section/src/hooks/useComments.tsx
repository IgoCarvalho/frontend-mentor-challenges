import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

import { CommentData } from '../types/comment';
import { User } from '../types/user';

import * as storageService from '../services/storageService';

interface CommentsContextData {
  comments: CommentData[];
  createComment: (author: User, text: string) => void;
  removeComment: (commentId: number) => void;
  createReply: (author: User, text: string, replyingTo: CommentData, belongsTo?: number) => void;
}

const CommentsContext = createContext<CommentsContextData>({} as CommentsContextData);

interface CommentsProviderProps {
  children: ReactNode;
}

export function CommentsProvider({ children }: CommentsProviderProps) {
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    const { comments: storedComments } = storageService.getComments();

    if (storedComments.length > 0) {
      setComments(storedComments);
    } else {
      fetch('/data.json')
        .then((res) => res.json())
        .then((commentRes) => {
          const newComments = [...commentRes.comments, ...storedComments];

          storageService.setComments(newComments);

          setComments(newComments);
        });
    }
  }, []);

  function createComment(author: User, text: string) {
    const newComment = storageService.addComment(author, text);

    setComments([...comments, newComment]);
  }

  function removeComment(commentId: number) {
    storageService.deleteComment(commentId);

    const filteredComment = comments.filter((comment) => comment.id !== commentId);

    setComments(filteredComment);
  }

  function createReply(author: User, text: string, replyingTo: CommentData, belongsTo?: number) {
    const replyCommentId = belongsTo || replyingTo.id;

    const updatedComments = storageService.addReply(
      author,
      text,
      replyingTo.user.username,
      replyCommentId
    );

    setComments(updatedComments);
  }

  const context = useMemo<CommentsContextData>(
    () => ({ comments, createComment, removeComment, createReply }),
    [comments]
  );

  return <CommentsContext.Provider value={context}>{children}</CommentsContext.Provider>;
}

export function useComments() {
  return useContext(CommentsContext);
}

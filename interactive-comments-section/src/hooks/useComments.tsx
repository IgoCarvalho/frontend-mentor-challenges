import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

import { CommentData } from '../types/comment';
import { User } from '../types/user';

import * as storageService from '../services/storageService';

interface CommentsContextData {
  comments: CommentData[];
  createComment: (author: User, text: string) => void;
  removeComment: (commentId: number) => void;
}

const CommentsContext = createContext<CommentsContextData>({} as CommentsContextData);

interface CommentsProviderProps {
  children: ReactNode;
}

export function CommentsProvider({ children }: CommentsProviderProps) {
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((commentRes) => {
        const { comments: storageComments } = storageService.getComments();
        setComments([...commentRes.comments, ...storageComments]);
      });
  }, []);

  function createComment(author: User, text: string) {
    const newComment = storageService.createComment(author, text);

    setComments([...comments, newComment]);
  }

  function removeComment(commentId: number) {
    storageService.deleteComment(commentId);

    const filteredComment = comments.filter((comment) => comment.id !== commentId);

    setComments(filteredComment);
  }

  const context = useMemo<CommentsContextData>(
    () => ({ comments, createComment, removeComment }),
    [comments]
  );

  return <CommentsContext.Provider value={context}>{children}</CommentsContext.Provider>;
}

export function useComments() {
  return useContext(CommentsContext);
}

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

import { CommentData } from '../types/comment';

interface CommentsContextData {
  comments: CommentData[];
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
      .then((commentRes) => setComments(commentRes.comments));
  }, []);

  const context = useMemo(() => ({ comments }), [comments]);

  return <CommentsContext.Provider value={context}>{children}</CommentsContext.Provider>;
}

export function useComments() {
  return useContext(CommentsContext);
}

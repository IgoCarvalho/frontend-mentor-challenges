import { User } from './user';

export interface CommentData {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo?: string;
  user: User;
  replies: CommentData[];
}

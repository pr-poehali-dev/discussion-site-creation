export interface Discussion {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: Date;
  commentsCount: number;
  likesCount: number;
  isLiked: boolean;
}

export interface Comment {
  id: string;
  content: string;
  author: string;
  createdAt: Date;
  likesCount: number;
  isLiked: boolean;
}

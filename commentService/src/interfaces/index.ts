export interface ICommentsRequestBody {
  content: string;
}

export interface IComment extends ICommentsRequestBody {
  id: string;
}

export interface IPost {
  id: string;
  comments: IComment[];
}

export interface ICommentRequestParams {
  postId: string;
}

import { Request, Response } from "express";
import { ICommentRequestParams, ICommentsRequestBody } from "../interfaces";
import { DAOComment } from "../model";
import { v4 as uuid } from "uuid";

const commentRepository = new DAOComment();

export const retrieveAllComments = (
  req: Request<ICommentRequestParams>,
  res: Response
) => {
  const { postId } = req.params;
  const comments = commentRepository.getAllPostComments(postId);

  return !comments
    ? res.status(404).json({ error: "Post no encontrado" })
    : comments.length < 1
    ? res.status(204).json({ error: "no hay coincidencias" })
    : res.json({ comments });
};

export const addOneComment = (
  req: Request<ICommentRequestParams, {}, ICommentsRequestBody>,
  res: Response
) => {
  const { postId } = req.params;
  const { content } = req.body;
  const commentId = uuid();
  const id = commentRepository.createOne({ id: commentId, content }, postId);

  res.status(201).json({ commentId: id });
};

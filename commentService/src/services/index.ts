import { Request, Response } from "express";
import { ICommentRequestParams } from "../interfaces";
import { DAOComment } from "../model";

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

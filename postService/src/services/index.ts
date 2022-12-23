import { Request, Response } from "express";
import { v4 as uuid } from "uuid";

import { IPost, IPostParamRequest, IRequestPost } from "../interfaces";
import { DAOPost } from "../models";

const postRepository = new DAOPost();

// obtener todos los posts
export const retrieveAllPosts = (req: Request, res: Response) => {
  const posts = postRepository.findAllPosts();
  return res.json({ posts });
};

// obtener post con query params
export const getPostByParams = (
  req: Request<{}, {}, {}, IPostParamRequest>,
  res: Response
) => {
  const { id, title } = req.query;

  if (id) {
    const post = postRepository.findById(id);
    return post
      ? res.json({ post })
      : res.status(404).json({ error: "Post no encontrado" });
  }

  if (title) {
    const posts = postRepository.findByTitle(title);
    return posts.length > 0
      ? res.json({ posts })
      : res.status(204).json({ error: "No hay coincidencias" });
  }

  return res.status(400);
};

// crear un nuevo post
export const createNewPost = (
  req: Request<{}, {}, IRequestPost>,
  res: Response
) => {
  const { title } = req.body;
  const newPost: IPost = {
    title,
    id: uuid(),
  };

  postRepository.createOne(newPost);
  res.status(201).json({ postId: newPost.id });
};

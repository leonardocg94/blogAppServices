import { Router, Request, Response } from "express";
import { createNewPost, getPostByParams, retrieveAllPosts } from "../services";

const router: Router = Router();

router.get("", retrieveAllPosts);
router.get("/find", getPostByParams);
router.post("", createNewPost);

export { router };

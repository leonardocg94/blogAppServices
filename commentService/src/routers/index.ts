import { Router } from "express";
import { retrieveAllComments } from "../services";

const router: Router = Router();

router.get("/:postId/comments", retrieveAllComments);

export { router };

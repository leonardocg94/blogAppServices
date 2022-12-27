import { Router } from "express";
import { addOneComment, retrieveAllComments } from "../services";

const router: Router = Router();

router.get("/:postId/comments", retrieveAllComments);
router.post("/:postId/comments", addOneComment);

export { router };

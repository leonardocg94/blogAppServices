import { IComment, IPost } from "../interfaces";

export class DAOComment {
  #posts: IPost[];

  constructor() {
    this.#posts = [];
  }

  getAllPostComments(postId: string) {
    return this.#posts.filter((post) => post.id === postId)[0]?.comments;
  }

  createOne(comment: IComment, postId: string) {
    const postIndex = this.#posts.findIndex(post => post.id === postId);
    if(postIndex < 0) {
      this.#posts.push({id: postId, comments: [comment]})
      return;
    }

    // this.#posts[postIndex]
  }
}

import { IPost } from "../interfaces";

export class DAOPost {
  #posts: IPost[];

  constructor() {
    this.#posts = [];
  }

  findAllPosts() {
    return [...this.#posts];
  }

  createOne(post: IPost) {
    this.#posts.push(post);
  }

  findById(id: string) {
    return this.#posts.filter((posts) => posts.id === id)[0];
  }

  findByTitle(title: string) {
    return this.#posts.filter((post) =>
      post.title.toLowerCase().includes(title.toLowerCase())
    );
  }
}

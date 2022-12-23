export interface IPost extends IRequestPost {
  id: string;
}

export interface IPostParamRequest {
  id?: string;
  title?: string;
}

export interface IRequestPost {
  title: string;
}

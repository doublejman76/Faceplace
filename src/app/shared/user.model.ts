import { Post } from "./post.model";

export interface User {
  id: number,
  name: string,
  imagePath: string,
  bio: string,
  posts: Post[],
  isFriends: boolean
}

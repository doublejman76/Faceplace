import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  users: User[] = [
    new User(0, 'some name', 'email@email.com',  [], 'image path', 'some bio'),
    new User(1, 'The Ultimate Warrior', 'email@email.com',  [], 'image path', 'some bio'),

  ]

  getUsers() {
    return this.users.slice();
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  fetchPosts(): Post[] {
    let allPosts = this.users.map((user) => user.posts);
    let mergedPosts = [].concat.apply([], allPosts);

    return mergedPosts;
  }

  addFriend(user: User) {
  //  user.isFriends = true;
  }

  deleteFriend(user: User) {
  //  user.isFriends = false;
  }

  likePost(post: Post) {
    post.likes++;
  }

  dislikePost(post: Post) {
    post.likes--;
  }
}

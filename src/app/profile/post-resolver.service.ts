
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Post } from '../shared/post.model';
import { HttpService } from '../shared/http/http.service';
import { PostsService } from '../posts/posts.service';

@Injectable({ providedIn: 'root' })
export class BookResolverService implements Resolve<Post[]> {
  constructor(
    private postsService: PostsService,
    private httpService: HttpService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const posts = this.postsService.getPosts();

    if (posts.length === 0) {
      return this.httpService.fetchPosts() || [];
    } else {
      return posts;
    }
  }
}

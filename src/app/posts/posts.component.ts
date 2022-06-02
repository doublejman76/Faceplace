import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];


  constructor(private PostsService: PostsService) { }

  ngOnInit(): void {
    // this.posts = this.PostsService.getPosts();
    // this.PostsService.postListChanged.subscribe((posts) => {
    //   this.posts = posts.sort((a, b) => +b.date - +a.date);
    // })
  }

  onLike(post:Post) {
    this.PostsService.likePost(post);
  }

  onDislike(post:Post) {
    this.PostsService.dislikePost(post);
  }

}

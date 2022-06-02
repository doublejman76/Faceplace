import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http/http.service';
import { Post } from '../shared/post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];


  // Where you inject
  // postservice and httpservice is injected into this component
  constructor(private postsService: PostsService,
              private httpService: HttpService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postsService.postListChanged.subscribe((posts) => {
      console.log("posts!", posts)
      // this.posts = posts.sort((a, b) => +b.date - +a.date);
      this.posts = posts
    })
  }

  onLike(post:Post) {
    this.postsService.likePost(post);
  }

  onDislike(post:Post) {
    this.postsService.dislikePost(post);
  }

  // define a delete post method
  onDelete(post:Post) {
    // send a delete request
    this.httpService.deletePost(post.id).subscribe((res) => {
      console.log(res)
      // update the view
    this.postsService.removePost(post.id)
    })


  }

}

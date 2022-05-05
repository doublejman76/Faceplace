import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../shared/post.model';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  friendModal;
  id: number;
  activeUser: User;
  posts: Post[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.activeUser = this.userService.getUserById(+this.id);
    this.posts = this.activeUser.posts;
  }

  onAddFriend(user){
    this.userService.addFriend(user);
    this.friendModal = user;
  }

  onDeleteFriend(user){
    this.userService.deleteFriend(user);
    this.friendModal = user;

  }

  onClose() {
  this.friendModal = null;
  }
}

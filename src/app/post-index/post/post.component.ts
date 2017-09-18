import { Component, OnInit, Input} from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { Person } from '../../profile-index/person.model';
import { ProfileIndexService } from '../../profile-index/profile-index.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService, private profileIndexService: ProfileIndexService) {
  }

  ngOnInit() {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

getPostByPerson(id: number) {
  return this.postService.getPostByPerson(id);
  }

}

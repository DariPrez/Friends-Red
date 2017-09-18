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
  person: Person;
  posts: Post[];
  model: Post = new Post();
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor(private postService: PostService, private profileIndexService: ProfileIndexService) {
  }

  ngOnInit() {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
    this.profileIndexService.getPerson().subscribe(person => this.person = person);
  }


getPostByPerson(id: number) {
  return this.postService.getPostByPerson(id);
  }


public disabled(submitted: boolean) {
  if (submitted) {
    this.submitted = false;
  }else {
    this.submitted = true;
  }
}

getCreateyService(post: Post, submitted: boolean) {
  this.disabled(submitted);
  this.postService.createPost(post).subscribe(posts => this.model = post);
}

}

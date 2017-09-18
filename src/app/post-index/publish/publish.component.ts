import { Component, OnInit } from '@angular/core';
import { Person } from '../../profile-index/person.model';
import { Post } from '../post/post.model';
import { PostService } from '../post/post.service';
import { ProfileIndexService } from '../../profile-index/profile-index.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  person: Person;
  model: Post = new Post();
  submitted = false;

  constructor(private postService: PostService, private profileIndexService: ProfileIndexService) { }

  ngOnInit() {
    this.profileIndexService.getPerson().subscribe(person => this.person = person);
  }

  public disabled(submitted: boolean) {
    if (submitted) {
      this.submitted = false;
    }else {
      this.submitted = true;
    }
  }

  getCreateService(post: Post, submitted: boolean) {
    post.publish = new Date();
    post.person = this.person;
    this.disabled(submitted);
    this.postService.createPost(post).subscribe();
  }
}

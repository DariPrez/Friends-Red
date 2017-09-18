import { Component, OnInit } from '@angular/core';
import { Person } from '../profile-index/person.model';

@Component({
  selector: 'app-post-index',
  templateUrl: './post-index.component.html',
  styleUrls: ['./post-index.component.css']
})
export class PostIndexComponent implements OnInit {

  id: number;

  constructor() { }

  ngOnInit() {
  }

  updateTotal(id) {
    this.id = id;
  }
}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProfileIndexService } from './profile-index.service';
import { Person } from './person.model';

@Component({
  selector: 'app-profile-index',
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index.component.css']
})
export class ProfileIndexComponent implements OnInit {

  myPerson: Person;

  constructor(private profileIndexService: ProfileIndexService) {  }

  ngOnInit() {
    this.profileIndexService.getPerson()
                            .subscribe(myPerson => this.myPerson = myPerson);
  }

}

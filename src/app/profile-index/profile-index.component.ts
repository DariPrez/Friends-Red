import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
import { ProfileIndexService } from './profile-index.service';

@Component({
  selector: 'app-profile-index',
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index.component.css']
})
export class ProfileIndexComponent implements OnInit {

  person: Person[];




  constructor(private profileIndexService: ProfileIndexService) {  }

  ngOnInit() {
    this.profileIndexService.getPersons()
                            .subscribe(person => this.person = person);
  }

}

import { Component, OnInit } from '@angular/core';
import { Person } from '../../profile-index/person.model';
import { ProfileIndexService } from '../../profile-index/profile-index.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myPerson: Person;
  model = new Person();
  submitted = false;
  onSubmit() {
    if (this.submitted) {
      this.submitted = true;
    } else {
      this.submitted = false;
    } }
  constructor(private profileIndexService: ProfileIndexService) {  }

  ngOnInit() {
    this.profileIndexService.getPerson()
                            .subscribe(myPerson => this.myPerson = myPerson);
  }

  updatePerson() {
    this.profileIndexService.updatePerson(this.model);
  }

  public disabled(submitted: boolean) {
    if (submitted) {
      this.submitted = false;
    }else {
      this.submitted = true;
    }
  }
  getUpdateService(person: Person, submitted: boolean) {
    this.disabled(submitted);
    this.profileIndexService.updatePerson(person)
                           .subscribe();
  }

}

import { Person } from './person.model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProfileIndexService {

    catsURL = 'http://localhost:3000/persons/3';

    constructor(private http: Http) {
    }

    getPersons(): Observable<Person[]> {
        return this.http.get(this.catsURL)
            .map( (res: Response) => res.json())
            .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
    }

    updatePerson(person: Person): Observable<Person[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' }); // .. Set content type to JSON
        const options = new RequestOptions({ headers: headers}); // create a request option

        return this.http.put(`${this.catsURL}/${person['id']}`, person, options)
                        .map((res: Response) => res.json())
                        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}

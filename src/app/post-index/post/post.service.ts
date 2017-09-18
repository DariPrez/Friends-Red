import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Post } from './post.model';

@Injectable()
export class PostService {

    catsURL = 'http://localhost:3000/posts';

    constructor(private http: Http) {
    }

    getPosts(): Observable<Post[]> {
        return this.http.get(this.catsURL)
            .map( (res: Response) => res.json())
            .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
    }

    getPostByPerson(id: number): Observable<Post[]> {
        return this.http.get(`${this.catsURL}/?person.id=${id}`)
          .map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

      }

    createPost(post: Post): Observable<Post[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' }); // .. Set content type to JSON
        const options = new RequestOptions({ headers: headers}); // create a request option

        return this.http.post(this.catsURL, post, options)
                        .map((res: Response) => res.json())
                        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}

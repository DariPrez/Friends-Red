import { Person } from '../../profile-index/person.model';

export class Post {
    'id': number;
    'person': Person;
    'text': string;
    'publish': Date;
}

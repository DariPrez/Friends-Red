var faker = require('faker')

var persons = []
var posts = []
var opinions = []
var relations = []

function generatePeople () {
  for (var id = 0; id < 50; id++) {
    faker.locale = "es"
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var phoneNumber = faker.phone.phoneNumberFormat()
    var city = faker.address.city();
    var country = faker.address.country();
    var picture = faker.internet.avatar();
    var birth = faker.date.past();

    persons.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "city": city, 
      "country": country,
      "picture": picture,
      "birth": birth
    })
  }
  return persons
}

function getRandomPerson() {
  var randomId = faker.random.number({
    'min': 0,
    'max': 49
  })

  return persons.filter( person => person.id === randomId );
}

function generatePost () {
  for (var id = 0; id < 10; id++) {
    faker.locale = "es"

    var publish = faker.date.past()
    var text = faker.lorem.paragraph()

    posts.push({
      "id": id,
      "person": getRandomPerson(),
      "text": text,
      "publish": publish
    })
  }
  return posts
}

function generateOpinions () {
  posts.forEach( post => {
    for (var id = 0; id < 5; id++) {
      var opinion = faker.random.number({
        'min': 1,
        'max': 3
      })

      opinions.push({
        "post": post,
        "person": getRandomPerson(),
        "opinion": opinion
      })
    }
  })
  return opinions
}

function generateRelations () {
  for(var id = 0; id < 20; id++){
    var requester = getRandomPerson();
    var requested = getRandomPerson();
    var accepted = faker.random.boolean();

    var founded = false;
    relations.forEach( relation => {
      if( (relation.requester === requester && relation.requested === requested) || 
        (relation.requester === requested && relation.requested === requester)){
          founded = true;
        }
    })

    if( !founded ){
      relations.push({
        "requester": requester,
        "requested": requested,
        "accepted": accepted
      })
    }
  }
  return relations
}

var myFakeData = {
  "persons": generatePeople(),
  "posts": generatePost(),
  "opinions": generateOpinions(),
  "relations": generateRelations()
}
console.log(JSON.stringify(myFakeData))


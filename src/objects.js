// Unit 2 Assessment: objects.js

// Given an array of objects representing people, return a new array of just
// their full (first name and last name) names.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getNames([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//   ]);
//   => ['Gale Dekarios', 'Wyll Ravengard', 'Karlach Cliffgate'];
function getNames(people) {
  // map through people array and return first and last name
  return people.map(person => `${person.firstName} ${person.lastName}`);
}

// Given an object representing a person, return their full name (first name and last name).
// You MUST use object destructuring in your solution.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getName({ firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' });
//   => 'Gale Dekarios'
function getNameUsingDestructuring(person) {
 const { firstName, lastName } = person;

 return `${firstName} ${lastName}`;
}

// Given an array of objects representing people, return a new array of the
// people matching the given location.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getPeopleByLocation([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ], "Baldur's Gate");
//   => [
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ];
function getPeopleByLocation(people, location) {
  // use filter to filter out the location we want from within the array
  return people.filter( person => person.location === "Baldur's Gate")
}

// Translate a phrase to pirate talk.
//
// Given an English phrase, use the EN_PIRATE_LOOKUP object to translate words
// to pirate talk. Words that aren't listed in the lookup object should not be
// translated and should pass through unchanged.

// The given phrase will be normalized so it'll never contain punctuation and
// will only consist of lowercased letters.
//
// Ex.:
//   translateToPirateTalk('excuse me sir where is the restroom');
//   => 'avast me matey where be the head'
const EN_PIRATE_LOOKUP = {
  excuse: 'avast',
  sir: 'matey',
  is: 'be',
  restroom: 'head',
  student: 'swabbie',
  friend: 'matey',
  restaurant: 'galley',
  your: 'yer',
  are: 'be',
  my: 'me',
  hotel: 'fleabag inn',
  hello: 'ahoy',
};

function translateToPirateTalk(phrase) {
  // using phrase.split to split the phrase into words
  // .map through the EN_PIRATE_LOOPUP[word] || word to iterate through the words in order to translate them or keep them unchanged based on what we have on our list.
  // then .join to add the translated words back into our phrase
  return phrase.split(" ").map(word => EN_PIRATE_LOOKUP[word] || word).join
(" ");
}

// Return the number of occurrences of each word in a string.
// This function doesn't handle punctuation and is case-sensitive, so you can
// count 'hello!', 'hello', and 'Hello' as different words.
//
// Ex.:
//   wordCount('hello world')
//   => { hello: 1, world: 1 }


function wordCount(str) {

  // reduce takes in our three arguments
  // the accumulator is empty in this instance as we don't know the current cord count
  // current index of the word in the array. Do I need this somewhere? 

    return str.split().reduce((count, word) => {
      // count[word] accesses count for our current word 
      // || 0 if the word doesn't exist count[word] will be undefined. it will evaluate to a big 0
      // then it will add keep looking for a new word with our + 1
      // return our count
      // this hurt my brain. rip to sanity
    count[word] = (count[word] || 0 + 1);

    return count;
  }, {})
}

// How to get in one line in our console return 

// Given an object representing a bug, return true if the given bug is
// available in the given month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   isBugAvailable({
//     name: 'common butterfly',
//     availability: {
//       rarity: 'common',
//       months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
//     }
//   }, 1);
//   => true
function isBugAvailable(bug, month) {
  // check if month is available by using .includes()in the bug's availability within months

  return bug.availability.months.includes(month);
}

// Given an array of objects representing bugs, return an object that'll be
// used to build a calendar. The keys of the object should be the months of the
// year, and the values should be the names of bugs available in that month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   const bugs = [
//     {
//       name: 'peacock butterfly',
//       availability: {
//         rarity: 'common',
//         months: [1, 2, 3],
//       },
//     },
//     {
//       name: 'yellow butterfly',
//       availability: {
//         rarity: 'common',
//         months: [3],
//       },
//     },
//   ];
//   buildBugHuntCalendar(bugs);
//   => {
//     1: ['peacock butterfly'],
//     2: ['peacock butterfly'],
//     3: ['peacock butterfly', 'yellow butterfly'],
//     4: [],
//     5: [],
//     ...
//     11: [],
//     12: [],
//   }

function buildBugHuntCalendar(bugs) {

  // create empty object to store our bugs :)
  const calendar = {}

  // loop through each month (1-12) and keep adding to total of our iterator month++
  for (let month = 1; month <= 12; month++) {
    calendar[month] = [];
  }

  // loop through bugs using forEach
bugs.forEach(bug => {
  // iterate through available months using another forEach
  bug.availability.months.forEach(availableMonth => {
    // check if month is in valid range of months 1-12
    if (availableMonth >= 1 && availableMonth <= 12) {
      // add bugs name to calendar for each month that is valid to bug
      calendar[availableMonth].push(bug.name);
    } else {
      // incase something is wrong we throw a warning
      console.warn (`Invalid month for ${bug.name} : ${availableMonth}`)
    }
  })
})

// return completed object
return calendar;

}

export {
  buildBugHuntCalendar,
  getNameUsingDestructuring,
  getNames,
  getPeopleByLocation,
  isBugAvailable,
  translateToPirateTalk,
  wordCount,
};

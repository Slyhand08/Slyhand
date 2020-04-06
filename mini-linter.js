let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
console.log('The total number of words in the paragraph is ' + storyWords.length + 'words');
// console.log(storyWords); 

let betterWords = storyWords.filter(function(word){
  return !unnecessaryWords.includes(word);
})

// console.log(betterWords);

/* Counting OverUsed Words */

// First Method
const totalCount = () => {
  let totalOver = 0;
  let numOver = storyWords.filter(function(word){
    return overusedWords.includes(word);
  })
  let numb = numOver.length;
  totalOver += numb;
  return totalOver;
}

console.log('The total number of overused words are: ' + totalCount()); // Should Print 8

// Second Method
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for (word of storyWords) {
  if (word === 'really'){
    reallyCount += 1;
  } else if (word === 'very'){
    veryCount += 1;
  } else if (word === 'basically'){
    basicallyCount += 1;
  }
}

/* Test Function */
console.log('The number of really: ' + reallyCount); // Prints 2
console.log('The number of very: ' + veryCount); // Prints 5
console.log('The number of basically: ' + basicallyCount); //Prints 1
console.log('The total count: ' + (reallyCount + veryCount + basicallyCount)); // Prints 8

/* Paragraph Sentences */

// First Method
let paragraphCount = 0;

for (word of storyWords) {
  if (word.includes('.') || word.includes('!')){
    paragraphCount += 1;
  }
}

console.log('The number of sentences in the paragraph is ' + paragraphCount);

// Second Method
let sentences = 0;
storyWords.forEach(words => {
  if (words[words.length-1] === '.' || words[words.length-1] === '!'){
    sentences += 1;
  }
})

console.log('The number of sentences is ' + sentences); // Prints 12

console.log('This paragraph has a total of ' + storyWords.length + ' words. We found a total number of ' + totalCount() +' overused words, of which ' + reallyCount + ' of them are the word \'really\', ' + veryCount + ' of them are the word \'very\', and ' + basicallyCount + ' of them are the word \'basically\'. We also checked the number of sentences in the paragraph. We found a total of ' + sentences + ' sentences in it.'); // All in a Paragraph
console.log(betterWords.join(' '));

/* Extension */
// Coming soon!

// regEx
// from freeCodeCamp on scrimba and youtube
// https://scrimba.com/learn/regularexpressions/regex-tutorial-using-the-test-method-cPnknfE

let sentence = "The dog chased the cat.";
let regex = /the/;

// using test
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);

// use the match method
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);
console.log(result);

// use or operator |
let petString = "James has a pet cat.";
let petRegex = /pet|cat/;
let result = petRegex.test(petString);
console.log(result);

// use flag to ignore case i
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
console.log(result);

// Extract matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
console.log(result);

// find all the matches with the g and i flags
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
console.log(testStr.match(ourRegex));

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
console.log(result);

// wildcard . to catch any char
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // will find sun fun run bun anyletter with un
let result = unRegex.test(exampleStr);

console.log(result);

// match single char with multiple possibilities
let bgRegex = /b[aiu]g/;

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // select all the vowels in a string
let result = quoteSample.match(vowelRegex);
console.log(result);

// Match Letters of the Alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);
console.log(result);

// Match Numbers and Letters of the Alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-z0-3]/gi;
let result = quoteSample.match(myRegex);

console.log(result);

// negate the selector that match other than the given list use carrot ^
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi;
let result = quoteSample.match(myRegex);

console.log(result);

// Match Characters that Occur One or More Times use plus +
let difficultSpelling = "Mississippis";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

console.log(result);

// Match Characters that Occur Zero or More Times use asterisk *
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);
console.log(result);

// Find Characters with Lazy Matching (greedy and lazy matching)
// greedy match all the possibility of matching (default)
// lazy match the fisrt minimum matching (use ? after the pattern)

let string = "titanic";
let regex = /t[a-z]*i/;
let regexLazy = /t[a-z]*?i/;
console.log(string.match(regex));
console.log(string.match(regexLazy));

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/;
let myRegexLazy = /<.*?>/;
let result = text.match(myRegex);
let resultLazy = text.match(myRegexLazy);

console.log(result);
console.log(resultLazy);

// Find One or More Criminals in a Hunt
let crowd = "P1P2P3P4P5P6CCCP7P8P9";

let reCriminals = /C+/; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

// Match Beginning String Patterns use ^
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
console.log(result);

// Match Ending String Patterns use $
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
console.log(result);

// Match All Letters and Numbers use \w
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);

// Match Everything But Letters and Numbers \W
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);

// Match All Numbers \d
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;
console.log(result);

// Match All Non-Numbers \D
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;
console.log(result);

// Restrict Possible Usernames
/*
1) If there are numbers, they must be at the end.
2) Letters can be lowercase and uppercase.
3) At least two characters long. 
4) Two-letter names can't have numbers. (Not solved) solved with look a head
*/
// use {minimum number of char, maximun}
let username = "Jacksmith12";
let userCheck = /^[a-zA-Z]{2,}\d{0,2}$/; // Change this line
let twoLetterUserCheck = /^[a-zA-Z]{2}(?!\d)$/; //
let result = userCheck.test(username);
result1 = userCheck.test(username);
result2 = twoLetterUserCheck.test(username);
console.log(result1);
console.log(result2);

// Match Whitespace \s
let sample = "Whitespace is important in separating\n words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);

// Match Non-Whitespace Characters \S
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\S/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);

// Specify Number of Matches {min,max}
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
console.log(result);

// Specify Only the Lower Number of Matches {min, }
let haStr = "Hazzzzah";
let haRegex = /z{4,}/g; // Change this line
let result = haRegex.test(haStr);
console.log(result);

// Specify Exact Number of Matches {exact only}
let timStr = "Timmmmber";
let timRegex = /Tim{4}/; // Change this line
let result = timRegex.test(timStr);
console.log(result);

// Check for All or None ? optional
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
console.log(result);

// Positive and Negative Lookahead (use multiple groups)
// (?=) look a head it should equal (positive lookahead)
// (?!) look a head it should not equal (negative lookahead)
// used to check one or more pattern in the same string
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/; // look ahead after q it should u
let qRegex = /q(?!u)/; // look a head after q it should not be u
console.log(quit.match(quRegex)); // Returns ["q"]
console.log(noquit.match(qRegex)); // Returns ["q"]

let sampleWord = "word12";
let pwRegex = /(?=\w{5})(?=\D*\d{2})/; // Change this line to solve five or more char and 2 or more digits
let result = pwRegex.test(sampleWord);
console.log(result);

// Reuse Patterns Using Capture Groups
// use () to repeat it with \1
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
// let repeatRegex = /(\w+)\s(\w+)/; // the same
console.log(repeatRegex.test(repeatStr)); // Returns true
console.log(repeatStr.match(repeatRegex)); // Returns ["regex regex", "regex"]

let repeatNum = "42 42 42 21";
// let reRegex = /(\d+)\s\1\s\1/; // Change this line
let reRegex = /^(\d+)\s\1\s\1$/; // exactly the three groups of numbers only
let result = reRegex.test(repeatNum);
console.log(result);

// Use Capture Groups to Search and Replace
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
console.log(wrongText.replace(silverRegex, "blue"));
// Returns "The sky is blue."
// $ match the first capture group result and so on
console.log("Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1"));
// Returns "Camp Code"

console.log("Aws Yaseen Ahmed".replace(/(\w+)\s(\w+)\s(\w+)/, "$3, $1 $2"));

let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);
console.log(result);

// Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log(result);

//

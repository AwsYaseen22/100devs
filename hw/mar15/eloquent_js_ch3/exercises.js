// Closures

function multiplier(factor) {
  return (number) => number * factor;
}

// twice now hold the return of the multiplier function which it is also a function and remember that the factor is 3
let twice = multiplier(3);

// now twice is the return of the inner functio wich its calculate the remembered factor 3 and multiplied it by 6
console.log(twice(6));

// Recursion
// function that call itself multiple times
function power(base, exponent) {
  if (exponent == 0) {
    // this is the final step that return 1 to not affect the multiplication
    return 1;
  } else {
    // the return of each function when the exponent is greator than 0 is the base number then it will be 1 then the return is 1 and that finish the program
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));

// find a solution add 5 or multiply by 3
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}

console.log(findSolution(9));
/*
  target = 8
  current 1
  history = '1'

  find(1, '1')
    find(6, '(1 + 5)')
    	find(11, '(1 + 5) + 5')
				too big
		find(18, '(1 + 5) * 3')
			too big
	find(3, ('1 * 3'))
		find(8, ('1 * 3') + 5)
			found

#####################
	target = 13
  current 1
  history = '1'

  find(1, '1')
    find(6, '(1 + 5)')
    	find(11, '(1 + 5) + 5')
    		find(16, '(((1 + 5) + 5') + 5)))
					too big
			find(33, '(((1 + 5) + 5 ) * 3')
					too big
		find(18, '((1 + 5) * 3)')
			too big
	find(3, '(1 * 3)')
		find(8, '((1 * 3) + 5 )')
			find(13, '(((1 * 3) + 5 ) + 5 )')
				found
		
			
########################

target = 3
  current 1
  history = '1'

  find(1, '1')
    find(6, '(1 + 5)')
			too big
	find(3, ('1 * 3'))
		found


########################

target = 9
  current 1
  history = '1'

  find(1, '1')
    find(6, '(1 + 5)')
			find(11, '((1 + 5) + 5 )')
				too big
			find(18, '((1 + 5) * 3 )')
				too big
	find(3, '(1 * 3)')
		find(8, (('1 * 3') + 5 ))
			find(13, ((('1 * 3') + 5 ) + 5 ))
				too big
		find(9, '((1 * 3) * 3 )')
			found


    

*/

// Exercises

/* Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10 */

function min(n1, n2) {
  return n1 < n2 ? n1 : n2;
}

console.log(min(0, 10));
console.log(min(0, -10));

// ####################################################################

// Recursion
/* We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this? */

function isEven(n) {
  if (n == 0) {
    return true;
  } else if (n < 0) {
    return false;
  } else {
    return isEven(n - 2);
  }
}
console.log(isEven(102));

// ###################################################

// Bean counting
/* You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function. */

function countBs(s) {
  return countChar(s, "B");
}
console.log(countBs("BBC"));

function countChar(s, c) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      result++;
    }
  }
  return result;
}
console.log(countChar("BBCSJSCCCC", "C"));

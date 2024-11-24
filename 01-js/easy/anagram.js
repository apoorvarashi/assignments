/*
  Write a function `isAnagram` which takes 2 parameters (and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
// str1 = str1.replace(/\s+/g, '').tolowercase();
 //str2 = str2.replace(/\s+/g, '').tolowercase();
 const sortstr1 = str1.split('').sort().join('');
    const sortstr2 = str2.split('').sort().join('');
  if(str1.length !== str2.length)
    return false;
}
const sortstr1 = str1.split('').sort().join('');
const sortstr2 = str2.split('').sort().join('');
return  sortstr2== sortstr2;

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false

const NUMBER_WORDS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

function solution(s) {
    NUMBER_WORDS.forEach((word, i) => s = s.replaceAll(word, i));
    
    return Number(s);
}
function LetterCapitalize(str) { 
var solution = [];
var wordSplit = str.split(' ');
  
  console.log(wordSplit);
  
  for (var i = 0; i < wordSplit.length; i++) {
    console.log(wordSplit[i]);
    solution.push((wordSplit[i].substring(0,1).toUpperCase() + (wordSplit[i]).substring(1)) );
    
  }
  solution = solution.join(" ");
  console.log(solution);
  return solution; 
         
}
LetterCapitalize("I am alive");
function words(stringAugument){

  //remove escape character and double spaces
  stringAugument  =stringAugument.replace('\n',' ');
  stringAugument  =stringAugument.replace('\t',' ');
  stringAugument  =stringAugument.replace('  ',' ');

  //split the sentence 
  let wordArray = stringAugument.split(' ');
  let wordFrequecy ={}

  //wordFrequecy.toString =null;
  //loop through the array and asign numbers against the words based on their frequecy 
  for(eachWord in wordArray){
    theWord = wordArray[eachWord];
    if(theWord ==='toString'){
      wordFrequecy.toString = null;
    }
    if(theWord in wordFrequecy){
      wordFrequecy[theWord] = wordFrequecy[theWord] + 1;
    }
    else{
        wordFrequecy[theWord] = 1;
    }
  }
  return wordFrequecy;
}


module.exports = {
  words : words
}
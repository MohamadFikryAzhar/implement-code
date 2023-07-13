function reverseSentence(sentence) {
    const words = sentence.split(" ");
    const reversedWords = words.reverse();
    const reversedSentence = reversedWords.join(" ");
    return reversedSentence;
  }
  
  const inputSentence = "Pijar Camp";
  const reversedSentence = reverseSentence(inputSentence);
  console.log(reversedSentence);
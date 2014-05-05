function freq_word_length(text, min_word_length, max_word_length) {
  var words = text.split(' ');
  
  if (words.length == 0) return 0;
  
  var match_count = 0;
  words.forEach(function (word) {
    if (word.length >= min_word_length && word.length <= max_word_length) {
      match_count++;
    }
  });
  
  return match_count / words.length;
}


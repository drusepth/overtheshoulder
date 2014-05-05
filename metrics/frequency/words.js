function words_of_length_frequency(text, min_word_length, max_word_length) {
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

function preposition_frequency(text) {

}

function pronoun_frequency(text) {
  
}

function determiner_frequency(text) {

}

function conjunction_frequency(text) {

}

function link_frequency(text) {

}

function prefix_frequency(text) {

}

function suffix_frequency(text) {

}

function characters_per_word(text) {

}


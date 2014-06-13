load('lib/structure.js');
load('lib/frequency.js');

function words_of_length_frequency(text, min_word_length, max_word_length) {
  var words = split_text_into_words(text);

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
  var prepositions = ["about", "across", "against", "along", "around", "at", "behind",
                      "beside", "besides", "by", "despite", "down", "during", "for", "from",
                      "in", "inside", "into", "near", "of", "off", "on", "onto", "over",
                      "through", "to", "toward", "with", "within", "without"];
  return frequency_of_words_in_text(prepositions, text);
}

function pronoun_frequency(text) {
  var pronouns = ["I", "you", "he", "me", "her", "him", "my", "mine", "her",
                  "hers", "his", "myself", "himself", "herself", "anything",
                  "everything", "anyone", "everyone", "ones", "such", "it",
                  "we", "they", "us", "them", "our", "ours", "their", "theirs",
                  "itself", "ourselves", "themselves", "something", "nothing", "someone"];
  return frequency_of_words_in_text(pronouns, text);  
}

function determiner_frequency(text) {
  var determiners = ["the", "some", "this", "that", "every", "all", "both", "one",
                     "first", "other", "next", "many", "much", "more", "most", 
                     "several", "no", "a", "an", "any", "each", "half", "twice",
                     "two", "second", "another", "last", "few", "little", "less",
                     "least", "own"];
  return frequency_of_words_in_text(determiners, text);
}

function conjunction_frequency(text) {
  var conjunctions = ["and", "but", "after", "when", "as", "because", "if", "what", "where",
                      "which", "how", "than", "or", "so", "before", "since", "while", 
                      "although", "though", "who", "whose"];
  return frequency_of_words_in_text(conjunctions, text);
}

function link_frequency(text) {
  var prefixes = ["http://", "https://", "www."];
  return frequency_of_prefix_in_text(prefixes, text);
}

function characters_per_word(text) {
  return split_text_into_characters(text).length / split_text_into_words(text).length;
}


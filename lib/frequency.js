load('structure.js');

function frequency_of_chars_in_text(target_chars, text) {
  var frequency = 0;
  var source_characters = split_text_into_characters(text);
  
  if (text.length == 0) return 0;
  
  split_text_into_characters(text).forEach(function (character) {
    if (chars_array.indexOf(character) > -1) frequency++;
  });
  
  return frequency / source_characters.length;
}

function frequency_of_words_in_text(target_words, text) {
  var frequency = 0;
  var source_words = split_text_into_words(text);

  if (text.length == 0) return 0;
  
  source_words.forEach(function (word) {
    if (target_words.indexOf(word) > -1) frequency++;
  });
  
  return frequency / text.split(' ').length;
}

function frequency_of_prefix_in_text(prefix_array, text) {
  var frequency = 0;
  var source_words = split_text_into_words(text);
  
  if (text.length == 0) return 0;
  
  source_words.forEach(function (word) {
    prefix_array.forEach(function (prefix) {
      if (word.substring(0, prefix.length) == prefix) frequency++;
    });
  });
  
  return frequency / source_words.length;
}

function frequency_of_suffix_in_text(suffix_array, text) {
  var frequency = 0;
  var source_words = split_text_into_words(text);
  
  if (text.length == 0) return 0;
  
  source_words.forEach(function (word) {
    suffix_array.forEach(function (suffix) {
      if (word.substring(word.length - suffix.length - 1, suffix.length) == suffix)
        frequency++;
    });
  });
  
  return frequency / source_words.length;
}

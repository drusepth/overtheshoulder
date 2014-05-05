function frequency_of_chars_in_string(chars_array, text) {
  var frequency = 0;
  
  if (text.length == 0) return 0;
  
  text.split('').forEach(function (character) {
    if (chars_array.indexOf(character) > -1) frequency++;
  });
  
  return frequency / text.length;
}

function frequency_of_words_in_text(words_array, text) {
  var frequency = 0;

  if (text.length == 0) return 0;
  
  text.split(' ').forEach(function (word) {
    if (words_array.indexOf(word) > -1) frequency++;
  });
  
  return frequency / text.split(' ').length;
}

function frequency_of_prefix_in_text(prefix_array, text) {
  var frequency = 0;
  
  if (text.length == 0) return 0;
  
  text.split(' ').forEach(function (word) {
    prefix_array.forEach(function (prefix) {
      if (word.substring(0, prefix.length) == prefix) frequency++;
    });
  });
  
  return frequency / text.split(' ').length;
}

function frequency_of_suffix_in_text(suffix_array, text) {
  var frequency = 0;
  
  if (text.length == 0) return 0;
  
  text.split(' ').forEach(function (word) {
    suffix_array.forEach(function (suffix) {
      if (word.substring(word.length - suffix.length - 1, suffix.length) == suffix)
        frequency++;
    });
  });
  
  return frequency / text.split(' ').length;
}

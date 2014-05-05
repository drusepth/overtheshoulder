load("lib/frequency.js");

function spacing_frequency(text) {
  var space_types = [' ', "\t", "\r", "\n"];
  return frequency_of_chars_in_string(space_types, text);
}

function vowel_frequency(text) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return frequency_of_chars_in_string(vowels, text);
}

function consonant_frequency(text) {
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p',
                    'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  return frequency_of_chars_in_string(consonants, text);
}

function digit_frequency(text) {
  var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return frequency_of_chars_in_string(digits, text);
}

function punctuation_frequency(text) {
  var punctuation = ['.', ',', ';', '?', '!', '-', '"', "'", ':', '(', ')', '[', ']'];
  return frequency_of_chars_in_string(punctuation, text);
}

function special_character_frequency(text) {
  var special = ['$', '^', '#', '@', '^', '%', '~'];
  return frequency_of_chars_in_string(special, text);
}

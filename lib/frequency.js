function frequency_of_chars_in_string(chars_array, text) {
  var frequency = 0;
  
  if (text.length == 0) return 0;
  
  text.split('').forEach(function (character) {
    if (chars_array.indexOf(character) > -1) frequency++;
  });
  
  return frequency / text.split('').length;
}

load('lib/common.js');
load('lib/structure.js');

function unique_words_per_paragraph(text) {
  var paragraphs = split_text_into_paragraphs(text);
  var cumulative_ratio = 0;
  
  paragraphs.forEach(function (paragraph) {
    var words = split_text_into_words(paragraph);
    var unique_words = unique_values_in_array(words);

    cumulative_ratio += (unique_words.length / words.length);
  });
  
  return ratio / paragraphs.length
}

function sentences_per_paragraph(text) {
  return split_text_into_sentences(text).length / split_text_into_paragraphs(text).length;
}

function words_per_paragraph(text) {
  return split_text_into_words(text).length / split_text_into_paragraphs(text).length;
}

function characters_per_paragraph(text) {
  return split_text_into_characters(text).length / split_text_into_paragraphs(text).length;
}

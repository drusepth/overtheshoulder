load('lib/structure');

function words_per_sentence(text) {
  return split_text_into_words(text).length / split_text_into_sentences(text).length;
}

function characters_per_sentence(text) {
  return split_text_into_characters(text).length / split_text_into_sentences(text).length;
}

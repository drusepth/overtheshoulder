function split_text_into_paragraphs(text) {
  return text.split("\n\n");
}

function split_text_into_sentences(text) {
  return text.split(/[\.\?!]\s/);
}

function split_text_into_words(text) {
  return text.split(' ');
}

function split_text_into_characters(text) {
  return text.split('');
}

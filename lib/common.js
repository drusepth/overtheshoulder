function unique_values_in_array(array) {
  return array.filter(function (value, index, self) {
    return self.indexOf(value) == index;
  });
}

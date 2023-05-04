function search(str, a, b) {
  if (str === '') {
    return -1;
  }
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === a || str[i] === b) {
      return i;
    }
  }
  return -1;
}

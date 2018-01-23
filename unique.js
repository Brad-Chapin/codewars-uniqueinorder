function uniqueInOrder (iterable) {
  let count = 0, uniques = [];
  while (count < iterable.length) {
    if (iterable[count] != iterable[count-1]) {
      uniques.push(iterable[count]);
    }
    count++;
  }
  return uniques;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));

module.exports = function reverse (n) {
  n = Math.abs(n).toString();
  let reverseNum = ""
  for(let i = n.length-1; i>=0; i--) {
    reverseNum += n[i];
  }
  return reverseNum;
}

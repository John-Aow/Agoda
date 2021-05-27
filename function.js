//for compare all number with first number
const gcd = (a, b) => {
  if (a == 0) return b;
  return gcd(b % a, a);
};

//use gcd and return answer of GCD
const findGCD = (data, n) => {
  var answer = data[0];
  data.map((x) => {
    answer = gcd(x, answer);
    if (answer == 1) {
      return 1;
    }
  });

  return answer;
};


module.exports = {findGCD}
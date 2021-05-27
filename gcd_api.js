const gcd = require("./function");

const gcd_api =(request, response)=>{
  let check = Object.keys(request.body);
  if (check.indexOf("numbers") < 0) {
    response.status(400).json({ error: "missing body" });
  }
  try {
    let value = JSON.parse(request.body.numbers);
    console.log(value);
    let answer = gcd.findGCD(value, value.length);

    response.status(201).json({ GCD: answer });
  } catch {
    response.status(400).json({ error: "wrong data" });
  }
}

module.exports = {gcd_api}
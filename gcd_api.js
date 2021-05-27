const gcd = require("./function");

const gcd_api =(request, response)=>{
  let check = Object.keys(request.body);
  ///check request.body
  if (check.indexOf("numbers") < 0) {
    response.status(400).json({ error: "missing body" });//return error if it's had no body name numbers
  }
  try {
    let value = JSON.parse(request.body.numbers);
    console.log(value);
    let answer = gcd.findGCD(value, value.length);

    response.status(201).json({ GCD: answer });
  } catch {
    response.status(400).json({ error: "wrong data" });//return error if it's not array string or array
  }
}

module.exports = {gcd_api}
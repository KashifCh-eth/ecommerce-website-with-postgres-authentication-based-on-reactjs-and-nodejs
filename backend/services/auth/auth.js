const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function authHash(argu) {
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(argu.password, salt);
  console.log("hashPassword!:", hashpassword);
  return hashpassword;
}

async function compareHash(Pass) {
  bcrypt.compare(Pass.userPass, Pass.dbPass, function (err, res) {
    if (res) {
      return res;
    } else {
      return err;
    }
  });
}

async function createToken(argu) {
  console.log("MYARGU:", argu);
  const token = await jwt.sign(argu, "mysecretkeyofcreatingtoken", {
    expiresIn: 604800,
  });
  console.log("TOKEN FROM AUTH!", token);
  return token;
}

module.exports = { authHash, createToken, compareHash };

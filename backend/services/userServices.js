const { where } = require("sequelize");
const { model, Sequelize } = require("../models/index");
const { authHash, createToken, compareHash } = require("./auth/auth");

const fatchUser = async (value) => {
  try {
    const user = await model.user.findOne({
      where: {
        email: value.email,
      },
    });
    console.log("Value:", user);

    if (!user) {
      return "NOT FOUND!";
    } else {
      const Pass = {
        userPass: value.password,
        dbPass: user.password,
      };
      const res = compareHash(Pass);
      if (res) {
        const RetriveUpdate = {
          email: user.email,
          password: user.password,
        };
        const token = await createToken(RetriveUpdate);
        return token;
      } else {
        return "Password wrong!";
      }
    }
  } catch (error) {
    console.log(error);
  }
};
const createUser = async (data) => {
  try {
    console.log("Value");
    const EncyPass = await authHash(data);
    const userData = { ...data, password: EncyPass };
    console.log(`UserData:`, userData);
    const FinalData = await model.user.create(userData);
    console.log(`response form databae:`, FinalData);
    return FinalData;
  } catch (error) {
    console.log(error);
  }
};
const updateUser = async () => {};
const deleteUser = async () => {};

module.exports = { fatchUser, createUser, updateUser, deleteUser };

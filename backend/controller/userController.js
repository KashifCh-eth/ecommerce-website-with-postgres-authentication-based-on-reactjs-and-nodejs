const userService = require("../services/userServices");
const AllValidation = require("../validation/AllValidation");

const fatchUser = async (req, res) => {
  try {
    const userdata = req.body;
    console.log(userdata)
    const { value, error } = AllValidation.fatchUser.validate(userdata);
    if (error !== undefined) {
      console.log("error", error);
    } else {
      const Respons = await userService.fatchUser(value);
      console.log("Response form Servises:", Respons);
      res.send({ accessToken: Respons , email:value.email });
    }
  } catch (error) {
    console.log(error);
  }
};
const createUser = async (req, res) => {
  try {
    const userdata = req.body;
    console.log("userData!",userdata);
    const { value, error } = AllValidation.createUser.validate(userdata)
    if (error !== undefined) {
      console.log("error", error);
    } else {
      const user = await userService.createUser(value);
      console.log("response from servises:", user);
      if (!user) {
        res.sendStatus(401);
        return;
      } else {
        res.sendStatus(200);
      }
    }
  } catch (error) {
    console.log(error)
  }
};
const updateUser = async (req, res) => {};
const deleteUser = async (req, res) => {};

module.exports = { fatchUser, createUser, updateUser, deleteUser };

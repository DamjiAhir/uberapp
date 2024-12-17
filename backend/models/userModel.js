const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  fullname: {
    firstname: { required: true, type: String },
    lastname: { required: true, type: String },
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  soketid: { type: String, required: true },
});

userSchema.methods.genrateAuthToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRETE);
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.static.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;

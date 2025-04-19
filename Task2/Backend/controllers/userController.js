import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import userModel from "../models/User.js";


const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, msg: "User doesn't Exists" })
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id)
      res.json({ success: true, token })
    }
    else {
      res.json({ success: false, message: "Invalid credentials" })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, msg: error.message })
  }
}


const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //checking user already exists or not
    const exists = await userModel.findOne({ email })
    if (exists) {
      return res.json({ success: false, msg: "User Already Exists" })
    }
    //validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, msg: "Please enter the valid email" })
    }
    if (password.length < 8) {
      return res.json({ success: false, msg: "Please enter the Strong Password" })
    }
    //hashing user's password
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await bcrypt.hash(password, salt)
    const newUser = new userModel({
      name,
      email,
      password: hashedpassword
    })
    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({ success: true, token })
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: 'ERROR' })
  }
}

export { loginUser, registerUser }
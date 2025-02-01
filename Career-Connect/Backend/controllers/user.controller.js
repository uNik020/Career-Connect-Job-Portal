import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloud.js";

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;

    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res
        .status(404)
        .json({ message: "Missing required fields", success: false });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email already exists",
        success: false,
      });
    }

    const file = req.file;
    if (!file) {
      return res
        .status(400)
        .json({ message: "Profile photo is required", success: false });
    }

    const fileUri = getDataUri(file);
    let cloudResponse;
    try {
      cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    } catch (uploadError) {
      console.error("Cloudinary upload error:", uploadError);
      return res
        .status(500)
        .json({ message: "Error uploading to Cloudinary", success: false });
    }

    //convert password to hash
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile: { profilePhoto: cloudResponse.secure_url },
    });

    await newUser.save();
    return res.status(200).json({
      message: `Account created successfully ${fullname}`,
      success: true,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res
      .status(500)
      .json({ message: "Server Error while registering user", success: false });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res
        .status(400)
        .json({ message: "Missing required fields", success: false });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Incorrect email or password", success: false });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(404)
        .json({ message: "Incorrect email or password", success: false });
    }

    if (user.role !== role) {
      return res.status(403).json({
        message: "You don't have the necessary role to access this resource",
        success: false,
      });
    }

    //generate token
    const tokenData = { userId: user._id };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      //adharcard: user.adharcard
      pancard: user.pancard,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "Strict",
      })
      .json({ message: `Welcome back ${user.fullname}`, user, success: true });

  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Server Error login failed", success: false });
  }
};

export const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "Logged out successfully.", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    if (!fullname || !email || !phoneNumber || !bio || !skills) {
      return res
        .status(404)
        .json({ message: "Missing required fields", success: false });
    }

    // cloudenery file
    let skillsArray;
    if(skills){
      const skillsArray = skills.split(",");
    }
    const userId = req.id; // Middleware authentication should set req.id
    let user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ message: "User  not found", success: false });
    }

    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skills.split(",");

    if (file) {
      const fileUri = getDataUri(file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
      user.profile.resume = cloudResponse.secure_url;
      user.profile.resumeOriginalName = file.originalname;
    }

    await user.save();

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      //adharcard: user.adharcard
      pancard: user.pancard,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .json({ message: "Profile updated successfully", user, success: true });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Server Error updating profile", success: false });
  }
};

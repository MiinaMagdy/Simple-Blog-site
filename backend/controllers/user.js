import User from "../models/User.js"
import bcrypt from 'bcryptjs';

export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json({users})
}

export const signup = async (req, res, next) => {
    const {name, email, password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email});
    } catch (err) {
        return console.log(err);
    }
    if (existingUser) {
        return res.status(400).json({ message: "User already exist, login instead" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({name, email, password:hashedPassword, blogs:[]});
    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }
    return res.status(201).json({user});
}

export const login = async (req, res, next) => {
    const {email, password} = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email});
    } catch (err) {
        return console.log(err);
    }
    if (!existingUser) {
        return res.status(404).json({ message: "User Not found" });
    }
    const isPasswordMatch = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordMatch) {
        return res.status(401).json({ message: "Password is wrong" });
    }
    return res.status(200).json({message: "Login successfully", existingUser});
}
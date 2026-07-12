import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
    try {
        const { name, email, password, role, phone } = req.body;

        const exists = await User.findOne({ email });

        if (exists) {
            return res.status(400).json({
                success: false,
                message: "Email already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            phone,
        });

        res.status(201).json({
            success: true,
            message: "User Registered",
            token: generateToken(user._id),
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user)
            return res.status(404).json({
                success: false,
                message: "User not found",
            });

        const match = await bcrypt.compare(password, user.password);

        if (!match)
            return res.status(401).json({
                success: false,
                message: "Invalid Password",
            });

        res.json({
            success: true,
            message: "Login Successful",
            token: generateToken(user._id),
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
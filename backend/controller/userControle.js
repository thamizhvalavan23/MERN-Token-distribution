import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { agentModel } from '../config/config.js';

const JWT_SECRET = "myverysecurejwtsecret";

export const addAgent = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Check all fields
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    // Validate phone format with country code (e.g., +91xxxxxxxxxx)
    const phoneRegex = /^\+\d{1,4}\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: "Invalid phone number format. Use +<countrycode><10 digit number>." });
    }

    // Check if agent already exists by email or phone
    const existingAgent = await agentModel.findOne({ $or: [{ email }, { phone }] });
    if (existingAgent) {
      return res.status(409).json({ message: "Agent with this email or phone already exists." });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const agendata = { name, email, phone, password:hashpassword };

    const agentData = new agentModel(agendata);

    await agentData.save();

    const token = jwt.sign({id:agentData.id},JWT_SECRET);

    res.send({success:true , message:"agent added successfully.", token})

  } catch (error) {
    console.error("Agent validation error:", error);
    res.status(500).json({ message: "Server error during validation." });
  }
};

// get agents 

export const getAgents = async (req, res) => {
    try {
      const agents = await agentModel.find({}, { password: 0 }); // Exclude password from response
      res.status(200).json({
        success: true,
        message: "Agents fetched successfully.",
        data: agents
      });
    } catch (error) {
      console.error("Error fetching agents:", error);
      res.status(500).json({
        success: false,
        message: "Server error while fetching agents."
      });
    }
  };
  


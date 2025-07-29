import jwt from 'jsonwebtoken';

// Hardcoded Admin credentials
const ADMIN_EMAIL = "sample@gmail.com";
const ADMIN_PASSWORD = "123456";
const JWT_SECRET = "myverysecurejwtsecret";

// Admin Login Controller
export const loginAdmin = async (req, res) => {
  
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All details are required",
      });
    }

    // Match credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

      return res.status(200).json({
        success: true,
        message: "Login successful",
        token,
      });
    } else {
      console.log("❌ Invalid login attempt");
      return res.status(403).json({
        success: false,
        message: "Invalid email or password",
      });
    }

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

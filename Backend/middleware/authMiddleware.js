import jwt from "jsonwebtoken";

const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  // 🔴 If no Authorization header
  if (!authHeader) {
    return res.status(401).json({ success: false, message: "No token provided" });
  }

  // ✅ Format: "Bearer <token>"
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ success: false, message: "Invalid token format" });
  }

  // 🔐 Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: "Invalid or expired token" });
    }

    // ✅ Store decoded info (like admin email/id)
    req.admin = decoded;
    next();
  });
};

export default verifyAdmin;

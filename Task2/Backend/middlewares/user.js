import jwt from 'jsonwebtoken';

const userMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log(token);

  if (!token) {
    return res.status(401).json({ msg: 'No token, auth denied' });
  }

  try {
    const actualToken = token.split(" ")[1];
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (err) {
    console.error("JWT Error:", err.message);
    res.status(401).json({ msg: "Token is not valid" });
  }
};

export default userMiddleware;

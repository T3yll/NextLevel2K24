import User from "../../../models/User";
import dbConnect from "../../../mongodb";
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "POST") {
    try {
      const { token } = req.body;

      const  decodedToken  = jwt.verify(token, process.env.JWT_SECRET);
    
      const existingUser = await User.findOne({ _id: decodedToken.id });
      if (existingUser) {
        return res.status(200).json(existingUser);
      }
      res.status(201).json({ message: "UnAuthorized" });
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}

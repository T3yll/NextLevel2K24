import User from "../../../../models/User";
import dbConnect from "../../../../mongodb";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      //Get All users
      console.log("Got here");
      const users = await User.find({}).lean();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  } else if (method === "PUT") {
    try {
      const body = JSON.parse(req.body);
      //update user
      const user = await User.findByIdAndUpdate(body.id, body, { new: true });

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}

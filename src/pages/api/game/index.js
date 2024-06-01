import Game from "../../../../models/Game";
import dbConnect from "../../../../mongodb";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      //Get All users

      const games = await Game.find({}).lean();
      res.status(200).json(games);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  } else if (method === "PUT") {
    try {
      const body = JSON.parse(req.body);
      //update user
      const game = await Game.findByIdAndUpdate(body.id, body, { new: true });

      res.status(200).json(game);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}

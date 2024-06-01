import dbConnect from "../../../../mongodb";
import Game from "../../../../models/Game";


export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "POST") {
    try {
      //create game
      const { nom, description, prix, quantiteStock, codeActivation } =
        req.body;
      const newGame = await Game.create({
        nom,
        description,

        prix,
        quantiteStock,
        codeActivation,
      });
      res.status(201).json({ message: "new Game addedd", game: newGame });
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}

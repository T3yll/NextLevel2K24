import { revalidateTag } from "next/cache";
import Buy from "../../../../models/Buy";
import User from "../../../../models/User";
import Game from "../../../../models/Game";

import dbConnect from "../../../../mongodb";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }

  try {
    // Validate request body
    const { userId, gameId, boughtPrice } = req.body;
  

    if (!userId || !gameId || !boughtPrice) {
      return res.status(400).json({ message: "Error Buying Game" });
    }

    // Fetch user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check user balance
    if (user.balance < boughtPrice) {
      return res.status(400).json({ message: "Insufficient balance" });
    }
    //existing game
    const game = await Game.findById(gameId);
    //check stock
    if (game.quantiteStock === 0) {
      return res.status(400).json({ message: "Out of stock" });
    }
    // Create buy record
    const bought = await Buy.create({
      user: userId,
      game: gameId,
      bought_price: boughtPrice,
    });
    // console.log("bought for user", bought);
    // Update user balance
    const updateUserBalance = await User.findByIdAndUpdate(
      userId,
      { $inc: { balance: -boughtPrice } },
      { new: true }
    );
    //decrement game stock
    const resx = await Game.findByIdAndUpdate(
      gameId,
      { $inc: { quantiteStock: -1 } },
      { new: true }
    );
    console.log({ resx });
    // Invalidate cache for user data
    // revalidateTag("user");

    return res.status(201).json({
      message: "Game bought successfully",
      bought,
      user: updateUserBalance,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

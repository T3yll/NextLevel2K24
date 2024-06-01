// src/actions/stats.ts

import dbConnect from "../../mongodb";
import User from "../../models/User";
import Buy from "../../models/Buy";

export const getStats = async () => {
  await dbConnect();

  try {
    // Nombre de membres
    const memberCount = await User.countDocuments();

    // Toutes les ventes
    const allBuys = await Buy.find({}).lean();

    // Nombre de ventes
    const saleCount = allBuys.length;

    // Revenu total
    const totalRevenue = allBuys.reduce((acc, buy) => acc + buy.bought_price, 0);

    // Date il y a 7 jours
    const date7DaysAgo = new Date();
    date7DaysAgo.setDate(date7DaysAgo.getDate() - 7);

    // Nouvelles ventes sur les 7 derniers jours
    const recentBuys = allBuys.filter(buy => new Date(buy.createdAt) >= date7DaysAgo);
    const recentSaleCount = recentBuys.length;

    // Revenu sur les 7 derniers jours
    const recentRevenue = recentBuys.reduce((acc, buy) => acc + buy.bought_price, 0);

    return {
      memberCount,
      saleCount,
      recentSaleCount,
      totalRevenue,
      recentRevenue
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw error;
  }
};

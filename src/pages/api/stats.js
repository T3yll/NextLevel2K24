// src/pages/api/stats.ts

import { getStats } from '@/actions/stats';

export default async function handler(req, res) {
  try {
    const stats = await getStats();
    res.status(200).json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

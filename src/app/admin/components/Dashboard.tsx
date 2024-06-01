'use client';
import React, { useEffect, useState } from 'react';
import { getStats } from '@/actions/stats';

const Dashboard = () => {
  const [stats, setStats] = useState({
    memberCount: 0,
    saleCount: 0,
    recentSaleCount: 0,
    totalRevenue: 0,
    recentRevenue: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        const statsData = await response.json();
        setStats(statsData);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold">Nombre de Membres</h2>
          <p className="text-2xl">{stats.memberCount}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold">Nombre de Ventes</h2>
          <p className="text-2xl">{stats.saleCount}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold">Nouvelles Ventes (7 derniers jours)</h2>
          <p className="text-2xl">{stats.recentSaleCount}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold">Revenus Totaux</h2>
          <p className="text-2xl">${stats.totalRevenue.toFixed(2)}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold">Revenus (7 derniers jours)</h2>
          <p className="text-2xl">${stats.recentRevenue.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

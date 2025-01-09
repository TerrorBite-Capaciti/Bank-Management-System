import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AccountOverviewChart = () => {
  // Chart data and options
  const data = {
    labels: ['Savings', 'Premium', 'Investments', 'Expenses'],
    datasets: [
      {
        label: 'Balance (in Rands)',
        data: [5250.75, 12340.5, 7500, 3000],
        backgroundColor: ['#ff5e57', '#333', '#1a1a1d', '#00bfa5'],
        borderColor: ['#ff4e4e', '#000', '#111', '#009688'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Account Overview',
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AccountOverviewChart;

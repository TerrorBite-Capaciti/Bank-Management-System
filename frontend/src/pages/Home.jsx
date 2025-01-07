import React from 'react';
import DepositForm from '../components/forms/DepositForm';
import WithdrawForm from '../components/forms/WithdrawForm';
import TransferForm from '../components/forms/TransferForm';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Your Account</h2>
      <DepositForm />
      <WithdrawForm />
      <TransferForm />
    </div>
  );
};

export default Home;

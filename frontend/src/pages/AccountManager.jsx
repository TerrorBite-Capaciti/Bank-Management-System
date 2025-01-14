import React, { useState } from 'react';
import DepositPage from '../pages/DepositPage';
import WithdrawPage from '../pages/WithdrawPage';

const AccountManager = () => {
  const [savingsBalance, setSavingsBalance] = useState(0); // Shared Savings balance
  const [premiumBalance, setPremiumBalance] = useState(0); // Shared Premium balance

  return (
    <div>
      <h1>Account Manager</h1>
      <DepositPage
        savingsBalance={savingsBalance}
        premiumBalance={premiumBalance}
        setSavingsBalance={setSavingsBalance}
        setPremiumBalance={setPremiumBalance}
      />
      <WithdrawPage
        savingsBalance={savingsBalance}
        premiumBalance={premiumBalance}
        setSavingsBalance={setSavingsBalance}
        setPremiumBalance={setPremiumBalance}
      />
    </div>
  );
};

export default AccountManager;

import React from "react";

import Profile from "./components/socialNetworksProfile/Profile";
import user from "./data/user.json";

import Statistic from "./components/statisticSection/Statistic";
import statisticData from "./data/statistical-data.json";

import FriendsList from "./components/friendsList/FriendsList";
import friends from "./data/friends.json";

import TransactionHistory from "./components/transactionHistory/Transaction";
import transactions from "./data/transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statisticData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}

import React from "react";

import SocialNetworkProfile from "./components/socialNetworkProfile/SocialNetworkProfile";
import user from "./data/user.json";

import Statistic from "./components/statistic/Statistic";
import statistic from "./data/statistic.json";

import FriendsList from "./components/friendsList/FriendsList";
import friends from "./data/friends.json";

import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

export default function App() {
  return (
    <>
      <SocialNetworkProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={statistic} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}

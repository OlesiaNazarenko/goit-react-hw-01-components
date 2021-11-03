import React from "react";
import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";
import TransactionTableContent from "../transactionTableContent/TransactionTableContent";

export default function TransactionHistory({ items }) {
  return (
    <table class={s.transactionHistory}>
      <thead class={s.rowTitles}>
        <tr>
          <th class={s.thTitles}>Type</th>
          <th class={s.thTitles}>Amount</th>
          <th class={s.thTitles}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionTableContent
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

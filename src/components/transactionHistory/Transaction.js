import React from "react";
import PropTypes from "prop-types";
import s from "./Transaction.module.css";

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
            <tr class={s.tableItems} key={id}>
              <td class={s.type}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
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
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

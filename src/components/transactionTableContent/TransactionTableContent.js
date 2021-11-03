import React from "react";
import PropTypes from "prop-types";
import s from "./TransactionTableContent.module.css";

export default function TransactionTableContent({ type, amount, currency }) {
  return (
    <tr class={s.tableItems}>
      <td class={s.type}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionTableContent.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

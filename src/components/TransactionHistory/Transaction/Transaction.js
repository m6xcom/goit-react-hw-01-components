import React from "react";
import PropTypes from "prop-types";
import styles from "./Transaction.module.css";

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={styles.item}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default Transaction;

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currency: PropTypes.string,
};

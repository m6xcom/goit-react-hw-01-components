import React from "react";
import PropTypes from "prop-types";
import style from "./TransactionHistory.module.css";
import Transaction from "./Transaction/Transaction";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr className={style.head}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((el) => {
          return (
            <Transaction
              key={el.id}
              type={el.type}
              amount={el.amount}
              currency={el.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      type: PropTypes.string,
      amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      currency: PropTypes.string,
    })
  ),
};

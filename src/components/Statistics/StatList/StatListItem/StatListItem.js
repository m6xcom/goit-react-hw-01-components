import React from "react";
import PropTypes from "prop-types";
import style from "./StatListItem.module.css";

const StatListItem = ({ label, percentage }) => {
  return (
    <li className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatListItem;

StatListItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

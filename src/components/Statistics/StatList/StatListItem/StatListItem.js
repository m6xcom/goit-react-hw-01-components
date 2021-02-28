import React from "react";
import PropTypes from "prop-types";
import style from "./StatListItem.module.css";

const StatListItem = ({ backgroundColor, label, percentage }) => {
  return (
    <li style={{ backgroundColor: backgroundColor }} className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatListItem;

StatListItem.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

import React from "react";
import PropTypes from "prop-types";
import style from "./StatList.module.css";

const StatList = ({ stats }) => {
  let colorId = 0;
  const colors = ["#4FC4F7", "#A33DF2", "#E54D63"];
  return (
    <ul className={style.statList}>
      {stats.map((el) => {
        let currentColor = colors[colorId];
        colorId < 2 ? (colorId += 1) : (colorId = 0);
        return (
          <li
            key={el.id}
            style={{ backgroundColor: currentColor }}
            className={style.item}
          >
            <span className={style.label}>{el.label}</span>
            <span className={style.percentage}>{el.percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};

export default StatList;

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

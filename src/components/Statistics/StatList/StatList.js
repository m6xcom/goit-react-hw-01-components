import React from "react";
import PropTypes from "prop-types";
import StatListItem from "./StatListItem/StatListItem";
import style from "./StatList.module.css";

const StatList = ({ stats }) => {
  return (
    <ul className={style.statList}>
      {stats.map((el) => {
        return (
          <StatListItem
            key={el.id}
            label={el.label}
            percentage={el.percentage}
          />
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

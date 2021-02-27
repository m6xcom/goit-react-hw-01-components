import React from "react";
import PropTypes from "prop-types";
import style from "./Statistics.module.css";
import StatList from "./StatList/StatList";

const Statistics = ({ stats, title }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <StatList stats={stats} />
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

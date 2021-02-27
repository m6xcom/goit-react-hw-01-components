import React from "react";
import PropTypes from "prop-types";
import style from "./Stats.module.css";

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={style.stats}>
      <li>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{followers}</span>
      </li>
      <li>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{views}</span>
      </li>
      <li>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{likes}</span>
      </li>
    </ul>
  );
};

export default Stats;

Stats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

Stats.defaultProps = {
  followers: 0,
  views: 0,
  likes: 0,
};

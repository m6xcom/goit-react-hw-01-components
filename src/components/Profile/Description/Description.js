import React from "react";
import PropTypes from "prop-types";
import style from "./Description.module.css";

const Description = ({ avatar, name, tag, location }) => {
  return (
    <div className={style.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className={style.avatar}
      ></img>
      <p className={style.name}>{name}</p>
      <p className={style.tag}>{tag}</p>
      <p className={style.location}>{location}</p>
    </div>
  );
};

export default Description;

Description.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
};

Description.defaultProps = {
  avatar:
    "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
  name: "Unknown",
};

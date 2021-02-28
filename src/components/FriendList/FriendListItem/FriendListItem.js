import React from "react";
import PropTypes from "prop-types";
import style from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span
        className={isOnline ? (style.status, style.online) : style.offline}
      ></span>
      <img
        className={style.avatar}
        src={avatar}
        alt="Пользователь"
        width="48"
      />
      <p className={style.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

FriendListItem.defaultProps = {
  avatar:
    "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
  name: "Unknown",
  isOnline: false,
};

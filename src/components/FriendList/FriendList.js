import React from "react";
import PropTypes from "prop-types";
import style from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map((el) => {
        return (
          <FriendListItem
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
            key={el.id}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ),
};

FriendList.defaultProps = {
  avatar:
    "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
  name: "Unknown",
  isOnline: false,
};

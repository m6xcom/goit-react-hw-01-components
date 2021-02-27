import React from "react";
import PropTypes from "prop-types";
import style from "./Profile.module.css";
import Description from "./Description/Description";
import Stats from "./Stats/Stats";

const Profile = ({ obj }) => {
  const { name, avatar, tag, location, stats } = obj;
  const { followers, views, likes } = stats;
  return (
    <div className={style.profile}>
      <Description avatar={avatar} name={name} tag={tag} location={location} />
      <Stats followers={followers} views={views} likes={likes} />
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

Profile.defaultProps = {
  avatar:
    "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
  followers: 0,
  views: 0,
  likes: 0,
};

import React from "react";
import PropTypes from "prop-types";
import style from "./Profile.module.css";
import Description from "./Description/Description";
import Stats from "./Stats/Stats";

const Profile = ({ obj }) => {
  const { name, avatar, tag, location, stats } = obj;
  return (
    <div className={style.profile}>
      <Description avatar={avatar} name={name} tag={tag} location={location} />
      <Stats stats={stats} />
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  obj: PropTypes.object,
};

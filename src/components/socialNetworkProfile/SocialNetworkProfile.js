import React from "react";
import classes from "./SocialNetworkProfile.module.css";
import ProfileInfo from "../profileInfo/ProfileInfo";
import ProfileStats from "../profileStats/ProfileStats";

export default function SocialNetworkProfile({
  name,
  tag,
  location,
  avatar,
  stats,
}) {
  return (
    <div className={classes.profile}>
      <ProfileInfo name={name} tag={tag} location={location} avatar={avatar} />
      <ProfileStats stats={stats} />
    </div>
  );
}

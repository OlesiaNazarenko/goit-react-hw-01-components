import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li class={styles.item}>
      {isOnline ? (
        <span className={styles.isOnline}></span>
      ) : (
        <span className={styles.offline}></span>
      )}

      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

import PropTypes from "prop-types";
import s from "./FriendsList.module.css";
import FriendsListItem from "../friendListItem/FriendListItem";

export default function FriendsList({ friends }) {
  return (
    <ul class={s.friendList}>
      {friends.map(({ name, avatar, isOnline, id }) => {
        return (
          <li class={s.item} key={id}>
            <FriendsListItem name={name} avatar={avatar} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

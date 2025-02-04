import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  const heart = props.liked ? '❤️' : '🤍';
  let color = 'black';
  const user = () => {
    if (props.sender === props.userList[0]) {
      color = props.localColor;
      return 'local';
    } else {
      color = props.remoteColor;
      return 'remote';
    }
  }

  return (
    <div className={`chat-entry ${user()}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={color}>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={() => {props.updateHeart(props.id)}}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  updateHeart: PropTypes.func.isRequired,
  localColor: PropTypes.string.isRequired,
  remotecolor: PropTypes.string.isRequired,
  userList: PropTypes.array.isRequired,
};

export default ChatEntry;

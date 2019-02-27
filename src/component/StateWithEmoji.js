import React from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatContainerALL.css';
import SendingMessages from './SendingMessages';
import ChatBox from './ChatBox';
import ChatContainerALL from './ChatContainerALL';

export default function StateWithEmoji(props) {

  const { text, handleChange, handleEmojiClick, toogleEmojiState } = props;

  return (
    <div className="wrapper">
          <div className='rows'>
            <aside className="aside aside-1"><Sidebar/></aside>
              <aside className="aside aside-2">PRIVATE MESSAGES</aside>
            </div>
            <div className='columns'>
              <div className="container1">
                <ChatContainer/>
            </div>
            <div className='container2'>
              <SendingMessages/>
              <span id="show-emoji-yes" onClick={toogleEmojiState}>{'😎'}</span>
                <div className="emoji-table">
                   <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
            </div>
          </div>
      </div>
      );
}
import React from 'react';
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
               <span id="show-emoji-no" onClick={toogleEmojiState}>{'😎'}</span>
            </div>
          </div>
      </div>
  );
}
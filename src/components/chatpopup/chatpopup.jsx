import React, { useState } from 'react';
// import { Launcher } from '../../src';
import { Launcher } from 'popup-chat-react';

export const DemoOfChat = () => {

  const [state, setState] = useState({
    messageList: [],
    newMessagesCount: 0,
    isOpen: false,
    fileUpload: true,
  });

  function onMessageWasSent(message) {
    setState(state => ({
      ...state,
      messageList: [...state.messageList, message]
    }));
  }

  function onFilesSelected(fileList) {
    const objectURL = window.URL.createObjectURL(fileList[0]);

    setState(state => ({
      ...state,
      messageList: [
        ...state.messageList,
        {
          type: 'file', author: 'me',
          data: {
            url: objectURL,
            fileName: fileList[0].name,
          }
        }
      ]
    }));
  }

//   function sendMessage(text) {
//     if (text.length > 0) {
//       const newMessagesCount = state.isOpen ? state.newMessagesCount : state.newMessagesCount + 1;

//       setState(state => ({
//         ...state,
//         newMessagesCount: newMessagesCount,
//         messageList: [
//           ...state.messageList,
//           {
//             author: 'them',
//             type: 'text',
//             data: { text }
//           }
//         ]
//       }));
//     }
//   }

  function onClick() {
    setState(state => ({
      ...state,
      isOpen: !state.isOpen,
      newMessagesCount: 0
    }));
  }

  return (
    <div>
      {/* <Header /> */}

      {/* <TestArea
        onMessage={sendMessage}
      /> */}


<button className='custom-btn-style text-light-gray rounded font-weight-600 font-12 position-relative mr-3' onClick={onClick}>Have a feedback?</button>
      <Launcher
        agentProfile={{
          teamName: 'Lightstep',
          timer:"Ask us anything, or share your feedback",
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={onMessageWasSent}
        onFilesSelected={onFilesSelected}
        messageList={state.messageList}
        newMessagesCount={state.newMessagesCount}
        onClick={onClick}
        isOpen={state.isOpen}
        showEmoji
        fileUpload={state.fileUpload}
        // pinMessage={{
        //   imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
        //   title: 'Our usual reply time',
        //   text: 'A few hours'
        // }}
        placeholder='placeholder'
      />

      {/* <img className="demo-monster-img" src={monsterImgUrl} />
      <Footer /> */}
    </div>
  );
}
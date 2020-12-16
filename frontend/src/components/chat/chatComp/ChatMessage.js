import React from 'react';

export default function ChatMessage({ userIndex, name, message }) {
  console.log(userIndex);
  const userStyle = userIndex % 2 === 0 ? "message-box message-partner" : "message-box";
  const senderPosition = userIndex % 2 === 0 ? "message-sender right" : "message-sender left";
  return (
    <div>
      <div class="message-sender">{name}: </div>
      <div class={userStyle}>
        <em>{message}</em>
      </div>
  </div>
  );
}
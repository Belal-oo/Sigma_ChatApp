import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";

const ChatInput = ({ handleSendMsg }) => {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emj) => {
    let message = msg;
    message += emj.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && (
            <div className="emoji-picker-react">
              <Picker onEmojiClick={handleEmojiClick} theme="dark" />
            </div>
          )}
        </div>
      </div>

      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
};

export default ChatInput;

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #3a3a3a7a;
  padding: 0 2rem;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #3cff00c7;
        cursor: pointer;
      }
      .Container .emoji .emoji-picker-react {
        background-color: #2e2e2e !important;
      }

      .emoji-picker-react {
        position: absolute;
        top: -470px;
        left: -3px;
        background-color: #2e2e2e !important;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        border: none;
        z-index: 10;
        transform: translateY(0);
        transition: all 0.3s ease-in-out;
      }

      .emoji-picker-react .emoji-scroll-wrapper {
        background-color: #2e2e2e !important;
      }

      .emoji-picker-react .emoji-search {
        background-color: #1a1a1a !important;
        color: #fff !important;
        border: 1px solid #444;
        border-radius: 8px;
      }

      .emoji-picker-react .emoji-categories button {
        background: none;
        color: #818181;
        filter: contrast(1.2);
      }

      .emoji-picker-react .emoji-group:before {
        background-color: transparent !important;
        color: #aaa !important;
      }

      .emoji-picker-react .emoji-img:hover {
        transform: scale(1.2);
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f15252;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;

import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  const opencamera = () => {
    const inputElement = document.getElementById("cameraInput");
    if (inputElement) {
      inputElement.click();
    }
  };
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" onClick={opencamera} />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
      <input
        type="file"
        accept="image/*"
        capture="environment"
        id="cameraInput"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Chat;

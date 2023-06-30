import s from "./Chat.module.css";
import { Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import UserMessage from "./UserMessage/UserMessage";
import { getMess } from "../../slices/slice";
import { getMyProfileData } from "../../thunk/thunk";

export const Chat:React.FC = () => {
  const [text, setText] = useState<string>("");
  const [ready, setReady] = useState("notReady");
  const [socket, setSocket] = useState<WebSocket|null>(null);
  const dispatch = useAppDispatch();
  const res = useAppSelector((state) => state.reducer.messages);
  const isAuth = useAppSelector((state) => state.reducer.isAuth);

  useEffect(() => {
    let ws:WebSocket;
    const createChanel = () => {
      ws = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
      );
      ws.onclose = () => {
        setTimeout(createChanel, 2000);
      };
      setSocket(ws);
    };
    createChanel();
    return () => ws.close();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.onopen = function () {
        setReady("ready");
      };
    }
  }, [socket]);
  useEffect(() => {
    dispatch(getMyProfileData());
  });

  let handler = function () {
    if (text === "") return;
    socket?.send(text);
    setText("");
    return false;
  };
  useEffect(() => {
    if (socket) {
      socket.addEventListener("message", (event) => {
        console.log("get");
        let data = JSON.parse(event.data);
        dispatch(getMess(data));
      });
      setTimeout(() => {
        let messageField = document.getElementById("messages");

        if (messageField) {
          let element = document.getElementById("messages")?.children;
          if (element) {
            let lastMsg = Array.from(
              messageField.children
            ).at(-1);
            lastMsg?.scrollIntoView({ inline: "start", behavior: "smooth" });
          }
        }
      }, 1000);
    }
  }, [dispatch, socket]);

  return isAuth ? (
    <div style={{ padding: "20px" }}>
      <div id="messages" className={s.msgBlock}>
        {res.map((i:any, ind:number) => (
          <UserMessage key={ind} {...i} />
        ))}
      </div>
      <Input
        value={text}
        style={{ width: "40%" }}
        onChange={(e) => setText(e.target.value)}
        id="message"
        status=""
        placeholder="Enter your message"
      />
      <Button
        disabled={socket === null || ready !== "ready"}
        onClick={handler}
        type="primary"
      >
        Send
      </Button>
    </div>
  ) : (
    <div>{"You are no autorized"}</div>
  );
};

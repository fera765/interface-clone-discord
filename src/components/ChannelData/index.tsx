import React, { useRef, useEffect } from "react";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

import ChannelMessage, { Mention } from "../ChannelMessage";

const ServerName: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Mateus"
            date="07/10/202"
            content="Fala seus devs kkk"
          />
        ))}

        <ChannelMessage
          key={1}
          author="Mateus"
          date="07/10/202"
          content={
            <>
              <Mention>@Rodrigo </Mention>, me adiciona no facebook
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar no chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ServerName;

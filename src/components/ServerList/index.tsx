import React from "react";

import ServerButton from "../ServerButton";

import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton hasNotification mentions={2} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton />
      <ServerButton mentions={10} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={20} />
    </Container>
  );
};

export default ServerList;

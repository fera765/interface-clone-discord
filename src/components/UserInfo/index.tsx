import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from "./styles";

export interface Props {
  isOnly?: boolean;
}

const UserInfo: React.FC<Props> = ({ isOnly }) => {
  return (
    <Container>
      <Profile>
        <Avatar isOnly={isOnly} />
        <UserData>
          <strong>lord765</strong>
          <span>#8757</span>
        </UserData>
      </Profile>
      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;

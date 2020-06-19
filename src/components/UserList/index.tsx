import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel -1</Role>
      <UserRow nickname="Professor Rodrigo" />

      <Role>Offine - 12</Role>
      <UserRow nickname="Thayna Campos" isBot />

      {Array.from(Array(15).keys()).map((n) => (
        <div key={n}>
          <UserRow nickname="Professor Rodrigo" />
        </div>
      ))}
    </Container>
  );
};

export default UserList;

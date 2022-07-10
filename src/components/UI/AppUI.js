import "./AppUI.css";
import UserForm from "../UserRegister/UserForm";
import UserBoard from "../UserRegister/UserBoard";
import UserEditor from "../UserRegister/UserEditor";
import { useState } from "react";

const users = [
  {
    name: "dan",
    age: 24,
    gender: "Homem",
  },
];

export default function AppUI() {
  const [usersData, setUsersData] = useState(users);

  function createUserBoard(Array) {
    return Array.map((userData, index) => {
      return (
        <UserBoard
          key={index}
          name={userData.name}
          age={userData.age}
          gender={userData.gender}
        />
      );
    });
  }

  function userDataHandler(newUser) {
    setUsersData((oldUsers) => {
      oldUsers.push(newUser);
      return [...oldUsers];
    });
  }

  function userEditHandler() {
    setUsersData((oldUsers) => {
      return [...oldUsers]
    })
  }

  return (
    <div className="main-content">
      <header className="header-content">
        <UserForm onSaveUserData={userDataHandler} />
      </header>
      <main className="board-content">
        <ul>{createUserBoard(usersData)}</ul>
      </main>
      <UserEditor userList={usersData} onEditUser={userEditHandler} />
    </div>
  );
}

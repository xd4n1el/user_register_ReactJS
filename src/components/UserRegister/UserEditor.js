import { useState } from "react";
import "./UserEditor.css";

export default function UserEditor(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Homem");
  const [editTarget, setEditTarget] = useState("");
  const list = props.userList;

  function changeName(event) {
    return setName(event.target.value);
  }

  function changeAge(event) {
    return setAge(event.target.value);
  }

  function changeGender(event) {
    return setGender(event.target.value);
  }

  function changeId(event) {
    return setId(event.target.value);
  }

  function userEditorTransitions(input, action) {
    let c = document.querySelector(input);
    c.style.display = action;
    resetForms();
  }

  function resetForms() {
    setName("");
    setAge("");
    setId("");
  }

  function findUserData() {
    const UserListPosition = list.findIndex(
      (user) => user.name.toLowerCase().trim() === id.toLowerCase().trim()
    );

    if (UserListPosition < 0) {
      return alert("Usuário não encontrado!");
    }

    setEditTarget(list[UserListPosition].name);
    userEditorTransitions(".findUser", "none");
    userEditorTransitions(".editor-showcase", "flex");
    setId(UserListPosition);
  }

  function sendNewUserData() {
    if (name === "" || age === "") {
      return alert("Os campos devem ser preenchidos!");
    }

    props.onEditUser(
      (list[id] = {
        name: name,
        age: age,
        gender: gender,
      })
    );

    resetForms();
    return userEditorTransitions(".editor-showcase ", "none");
  }

  function deleteUserData(event) {
    event.preventDefault();
    props.onEditUser(list.splice(id, 1));
    resetForms();
    return userEditorTransitions(".editor-showcase ", "none");
  }

  return (
    <div className="edit-menu">
      <div className="edit-button">
        <button onClick={() => userEditorTransitions(".findUser", "flex")} />
      </div>
      <div className="findUser">
        <div className="find-input">
          <input
            type="text"
            placeholder="Digite o nome do usuário"
            value={id}
            onChange={changeId}
          />
        </div>
        <div className="search-button">
          <button onClick={findUserData} />
        </div>
        <div className="cancel-searching-button">
          <button onClick={() => userEditorTransitions(".findUser", "none")} />
        </div>
      </div>
      <form className="editor-showcase">
        <div className="editor-title">
          <label>
            Alterar dados de: <br />
            {`${editTarget}`}
          </label>
        </div>
        <div className="edit-panel-userData">
          <div className="edit-userName">
            <label>Nome:</label>
            <input type="text" value={name} onChange={changeName} />
          </div>
          <div className="edit-userAge">
            <label>Idade:</label>
            <input type="number" value={age} onChange={changeAge} />
          </div>
          <div className="edit-userGender">
            <label>Gênero:</label>
            <select onChange={changeGender}>
              <option value="Homem">Homem</option>
              <option value="Mulher">Mulher</option>
            </select>
          </div>
          <div className="clear-and-done-buttons">
            <button
              className="clear-button"
              onClick={(event) => {
                event.preventDefault();
                return resetForms();
              }}
            />
            <button
              className="done-button"
              onClick={(event) => {
                event.preventDefault();
                return sendNewUserData();
              }}
            />
          </div>
        </div>
        <div className="edit-iterative-buttons">
          <button className="delete-button" onClick={deleteUserData}/>
          <button
            className="close-button"
            onClick={(event) => {
              event.preventDefault();
              return userEditorTransitions(".editor-showcase ", "none");
            }}
          />
        </div>
      </form>
    </div>
  );
}

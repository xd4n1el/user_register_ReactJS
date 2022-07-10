import { useState } from "react";
import "./UserForm.css";

export default function UserForm(props) {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userGender, setUserGender] = useState('Homem');

  function nameInputData(event) {
    return setUserName(event.target.value);
  }

  function ageInputData(event) {
    return setUserAge(event.target.value);
  }

  function genderInputData(event) {
    return setUserGender(event.target.value);
  }

  function maxLengthInputNumber(event) {
    if (event.target.value.length === 3) {
      return event.preventDefault();
    }
  }

  function submitUser() {
    const userData = {
      name: userName,
      age: userAge,
      gender: userGender,
    };

    if (userData.name === '' || userData.age === '') return;

    props.onSaveUserData(userData);
    clearInputs();
    
  }

  function clearInputs() {
    setUserName('');
    setUserAge('');
    setUserGender('Homem');
  }

  return (
    <form className="userForm-main-content">
      <div className="form-content">
        <div className="input-style">
          <label>Nome: </label>
          <input
            type="text"
            value={userName}
            onChange={nameInputData}
            maxLength="50"
            required
          ></input>
        </div>
        <div className="input-style">
          <label>Idade: </label>
          <input
            type="number"
            min="1"
            max="120"
            step="0.1"
            value={userAge}
            onChange={ageInputData}
            onKeyPress={maxLengthInputNumber}
            required
          ></input>
        </div>
      </div>
      <div className="userSelect-content">
        <label>Gênero: </label>
        <select className="userSelect-style" onChange={genderInputData}>
          <option value="Homem">Homem</option>
          <option value="Mulher">Mulher</option>
        </select>
      </div>
      <div className="user-buttons">
      <button onClick={clearInputs}>Limpar Campos</button>
        <button type="submit" onClick={submitUser}>Salvar Informações</button>
      </div>
    </form>
  );
}

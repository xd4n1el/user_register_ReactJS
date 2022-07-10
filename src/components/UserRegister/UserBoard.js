import "./UserBoard.css";

export default function UserBoard(props) {
  return (
    <li className="userboard-content">
      <div className="labels-box">
        <div className="name-box">
          <label >{`Nome: ${props.name}`}</label>
        </div>
        <div className="age-box">
          <label>{`Idade: ${props.age} ano(s)`}</label>
        </div>
        <div className="gender-box">
          <label>{`Gênero: ${props.gender}`}</label>
        </div>
      </div>
    </li>
  );
}

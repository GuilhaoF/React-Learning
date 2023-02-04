import { ChangeEvent, useState } from "react";
import { usePeopleList } from "../hooks/PeoplesList";

export default function PeopleList() {
  const [list, dispatch] = usePeopleList();
  const [inputText, setInputText] = useState("");

  function handleAddPeopleList() {
    if (inputText) {
      dispatch({
        type: "Add",
        payload: {
          name: inputText,
        },
      });
    }
  }
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }

  return (
    <div>
      <h2> Lista de Pessoas :</h2>
      <ul>{list.map((item,index)=>(
        <li key={index}>{item.name}</li>
      ))}</ul>
      <input
        type="text"
        placeholder="Digite Nome da Pessoa para a lista"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={handleAddPeopleList}>Adicionar Pessoa</button>
    </div>
  );
}

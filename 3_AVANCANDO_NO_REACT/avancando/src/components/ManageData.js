import {useState} from "react"

const ManageData = () => {
  const someData = 10;

  const [number, setNumber] = useState(15)
  return (
    <div>
      <div>
        <p>{someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variavel</button>
      </div>
      <p>Valor: {number} </p>
      <button onClick={() => setNumber(25)}>Mudar state</button>
    </div>
  );
};
export default ManageData;

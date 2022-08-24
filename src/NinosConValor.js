import InputWithLabel from './InputWithLabel';
import Button from './Button';
import {useState, useEffect} from 'react';

function NinosConValor() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  let [kid_name, setKid_name] = useState('');
  let [kid_lastname, setKid_lastname] = useState('');
  let [kid_CI, setKid_CI] = useState('');
  let [kid_birthday, setKid_birthday] = useState('');
  let [resultado, setResultado] = useState('');
  let [kids, setKids] = useState([]);
  const LinkKids = 'https://ucb-tde-ninos-con-valor-api.herokuapp.com/api/kids';

  function handleFormSubmit(event) {
    event.preventDefault();
    setResultado(parseInt(numero1) + parseInt(numero2));
  }

  function handleFormSubmit2(event) {
    event.preventDefault();
    setResultado(parseInt(numero1) - parseInt(numero2));
  }

  function registerKid(event) {
    // useEffect(() => {
    //   fetch(LinkKids, {
    //     method: "POST"
    //   })
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         setKids(result);
    //       }
    //     )
    // }, [])
  }

  useEffect(() => {
    fetch(LinkKids)
      .then(res => res.json())
      .then(
        (result) => {
          setKids(result);
        }
      )
  }, [])

  return (
    <div className="Sumador">
      <h3>Sumador</h3>
      <form onSubmit={handleFormSubmit}>
        <InputWithLabel
          type="number"
          id="numero1"
          value={numero1}
          onChange={event => setNumero1(event.target.value)}
        >
          Numero1:
        </InputWithLabel>
        <InputWithLabel
          type="number"
          id="numero2"
          value={numero2}
          onChange={event => setNumero2(event.target.value)}
        >
          Numero2:
        </InputWithLabel>
        <Button id="sumar-btn">Sumar</Button>
      </form>
      <Button id="restar-btn" onClick={handleFormSubmit2}>Restar</Button>
      <div>La suma de los numeros es:{resultado}</div>
      <div>La lista de nenes es:
        <ul>
          {kids.map(kids => (
            <li key={kids.id}>
              {kids.name}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={registerKid}>
        <InputWithLabel
          type="text"
          id="kid_name"
          value={kid_name}
          onChange={event => setKid_name(event.target.value)}
        >
          Nombre:
        </InputWithLabel>
        <InputWithLabel
          type="text"
          id="kid_lastName"
          value={kid_lastname}
          onChange={event => setKid_lastname(event.target.value)}
        >
          Apeshido:
        </InputWithLabel>
        <InputWithLabel
          type="text"
          id="kid_CI"
          value={kid_CI}
          onChange={event => setKid_CI(event.target.value)}
        >
          CI:
        </InputWithLabel>
        <InputWithLabel
          type="date"
          id="kid_birthday"
          value={kid_birthday}
          onChange={event => setKid_birthday(event.target.value)}
        >
          Cumpleanitos:
        </InputWithLabel>
        <Button id="register-btn">Registrar</Button>
      </form>
    </div>
  );
}
export default NinosConValor;
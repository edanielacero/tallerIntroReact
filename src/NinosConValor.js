import {useState, useEffect} from 'react';

function NinosConValor() {
  /*let [kid_name, setKid_name] = useState('');
  let [kid_lastname, setKid_lastname] = useState('');
  let [kid_CI, setKid_CI] = useState('');
  let [kid_birthday, setKid_birthday] = useState('');
  let [resultado, setResultado] = useState('')*/;
  let [kids, setKids] = useState([]);
  const LinkKids = 'https://ucb-tde-ninos-con-valor-api.herokuapp.com/api/kids';

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
    <div className="NinosConValor">
      <div>La lista de nenes es:
        <ul>
          {kids.map(kids => (
            <li key={kids.id}>
              {kids.name}
              {kids.lastName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default NinosConValor;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import react, {useState} from "react";

function notas(){
  const[nota1,setNota1] = useState(0);
  const[nota2,setNota2] = useState(0);
  const[nota3,setNota3] = useState(0);

  const[media, setMedia] = useState(0);
  const[situacao, setStiacao] = useState(); 
  
  function calcularmedia(){
const media = (nota1+nota2+nota3) / 3;
setMedia(media);
setStiacao(media >= 6 ? "Aprovado!" : "Reprovado!");

  }

  return(
    <div>
      <h2>
        Média de Notas Alunos Lado B</h2>
        <label htmlFor="nota1"> Nota 1: </label>
        <input
        id="nota1"
        type="number"
        value={nota1}
        onChange={(event) =>
        setNota1(Number(event.target.value))}
        /><br></br>
        <label htmlFor="nota2"> Nota 2: </label>
<input
        id="nota2"
        type="number"
        value={nota2}
        onChange={(event) =>
        setNota2(Number(event.target.value))}
        /><br></br>
        <label htmlFor="nota1"> Nota 3: </label>
<input
        id="nota3"
        type="number"
        value={nota3}
        onChange={(event) =>
        setNota3(Number(event.target.value))}
        /><br></br>
    
    <button onClick={calcularmedia}>Calcular Média</button>
    {media > 0 && (
      <div>
        <h3><p>A média do: Vinicius<br></br>{media}</p></h3>
        <h3><p> A situação do : Vinicius<br></br>{situacao}</p></h3>
      </div>
    )}
    </div>



  )

  }

  export default notas;
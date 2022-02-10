import '../styles/ContainerForm.css'
import ButtonAddForm from './ButtonAddForm'
import Inputs from './Inputs'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ButtonCalcular from './ButtonCalcular';
import getTimeDifference from '../utils/getTimeDifference';
import getMedia from '../utils/getMedia';
import ResponseBox from './ResponseBox';




export default (props) => {

     const [idForm, setIdForm] = useState(2);
     const [inputs, setInputs] = useState([<Inputs formId={1} placeholder={1}/>]);
     const [responseBox, setResponseBox] = useState(null)
     
     function appendInput(){
        setIdForm(idForm + 1);
        inputs.push(<Inputs formId={idForm} />)
        setInputs([...inputs])
     }


     
     function calculateMedia(e){
        e.preventDefault()        
        let timeResponse = []
        console.log(inputs)
        inputs.forEach(
          (e,i) => {
            timeResponse.push(getTimeDifference(document.getElementById("tempo-inicial-"+(i+1)).value, document.getElementById("tempo-final-"+(i+1)).value))
          }
        )
        console.log(getMedia(timeResponse))
        setResponseBox(<ResponseBox time={getMedia(timeResponse)}/>)
     }

     

      return(
        <form className="container-form">  
          {
            inputs.map((element,i) => {
              return <div key={i}>{element}</div>
            })
          } 
          <ButtonAddForm onclick={() => appendInput()}></ButtonAddForm>
          <ButtonCalcular onclick={(e) => calculateMedia(e)}></ButtonCalcular> 
          {responseBox} 
        </form>
      )
}
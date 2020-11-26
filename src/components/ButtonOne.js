import React,{useState} from 'react';
import stylesWrapper from './../HOC/stylesWrapper';

const ButtonOne = (props) => {
    const [onclick,setonclick]=useState(props.change)
    const clickk=onclick
   const boxClick = (e) => {
        setonclick(!clickk)
      }
      const style1 = {
        color: '#000',
        padding: '10px',
        backgroundColor:'green'
      };
    return (
        <button style={onclick?style1:props.styles} onClick={(e)=>boxClick(e)}>I am ButtonOne</button>
    )
}

export default stylesWrapper(ButtonOne);


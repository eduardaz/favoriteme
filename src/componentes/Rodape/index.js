import React from 'react'
import Style from './Rodape.module.css'


export default function Rodape(props) {
  return (
   
    <div className={Style.Rodape}>
      <img  src={props.logo1}/>
      <img src={props.logo2}/>
      <img src={props.logo3}/>
  </div>
  )
}

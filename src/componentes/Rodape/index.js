import React from 'react'
import Style from './Rodape.module.css'



export default function Rodape(props) {
  const getCurrentDate = () => {
  const now = new Date();
  return now.toLocaleDateString();
  }
  return (
   

    <div className={Style.Rodape}>
      <h2 className={Style.h2}>{getCurrentDate()}</h2>
      <img src={props.logo1}/>
      <img src={props.logo2}/>
      <img src={props.logo3}/>
  </div>

  )
}

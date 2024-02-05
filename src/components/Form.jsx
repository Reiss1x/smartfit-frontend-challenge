import React from 'react'
export default function Form() {
  return (
    <div className='box'>
        <img src='../_material/images/icon-hour.png'></img>
    {/* <h1>Qual período quer treinar?</h1> */}
    <form>
        <label > <input type="radio"  value='Manhã'/> Manhã </label>
        <hr/>
        <label > <input type="radio" value='Tarde'/> Tarde </label>
        <hr/>
        <label > <input type="radio" value='Noite'/> Noite </label>
        <hr/>
    </form>
    </div>
  )
}

import React from 'react'
import IconHour from '../_material/images/icon-hour.png'

export default function Form( {count} ) {

  return (
    <div className='box'>
      <div className='form'>
        <form >
          <div className='box-header'>
            <img src={IconHour} className='icon-hour'></img>
            Horário
          </div>      
            <h2>Qual período quer treinar?</h2>
            <div className='buttons'>
              <label > <input type="radio"  value='Manhã'/> Manhã </label>
              <span> 06:00 às 12:00 </span>
            </div>
            <div className='buttons'>
              <label > <input type="radio" value='Tarde'/> Tarde </label>
              <span> 12:01 às 18:00 </span>
            </div>
            <div className='buttons'>
              <label > <input type="radio" value='Noite'/> Noite </label>
              <span> 18:01 às 23:00 </span>
            </div>
              <div className='box-footer'>
                <label> <input type='checkbox'></input> Exibir unidades fechadas</label>
                <span>Resultados encontrados: {count}</span>
              </div>
              <div className='lower-buttons'>
                <button className='find'> ENCONTRAR UNIDADE </button>
                <button className='clear'> LIMPAR </button>
              </div>
        </form>
      </div>
    </div>
  )
}

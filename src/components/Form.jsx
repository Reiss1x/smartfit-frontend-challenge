import React, { useEffect, useState } from 'react'
import IconHour from '../_material/images/icon-hour.png'

export default function Form( {onSubmit} ) {
  const [data, setData] = useState();
  const [closeBox, setCloseBox] = useState(true);
  const [results, setResults] = useState(0);
  const [checkbox, setCheckbox] = useState(0);

  useEffect(() => {
    fetch("https://test-frontend-developer.s3.amazonaws.com/data/locations.json")
    .then(res => res.json())
    .then(data => {
      setData(data)
      setResults(data.locations.length)
      console.log(data)
    })
  }, [])
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    let count=0;
    if(!closeBox){
      data.locations.forEach((obj) => {
        if(obj.opened){
          count++
        }
      })
      setResults(count)
    } else {
      setResults(data.locations.length)
    }
    onSubmit(checkbox);
  }
  
  const handleChange = (event) => {
    setCheckbox(event.target.value)
  };

  const handleBoxChange = () => {
    setCloseBox(!closeBox)
    console.log(closeBox);
  }

  return (
    <div className='box'>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div className='box-header'>
            <img src={IconHour} className='icon-hour'></img>
            Horário
          </div>      
            <h2>Qual período quer treinar?</h2>
            <div className='buttons'>
              <label > <input type="radio"  value='Manhã' checked={checkbox === 1} onChange={handleChange}/> Manhã </label>
              <span> 06:00 às 12:00 </span>
            </div>
            <div className='buttons'>
              <label > <input type="radio" value='Tarde' checked={checkbox === 2} onChange={handleChange}/> Tarde </label>
              <span> 12:01 às 18:00 </span>
            </div>
            <div className='buttons'>
              <label > <input type="radio" value='Noite' checked={checkbox === 3} onChange={handleChange}/> Noite </label>
              <span> 18:01 às 23:00 </span>
            </div>
              <div className='box-footer'>
                <label> <input type='checkbox'checked={closeBox} onChange={handleBoxChange}/> Exibir unidades fechadas</label>
                <span>Resultados encontrados: {results}</span>
              </div>
              <div className='lower-buttons'>
                <button className='find' type='submit'> ENCONTRAR UNIDADE </button>
                <button className='clear'> LIMPAR </button>
              </div>
        </form>
      </div>
    </div>
  )
}

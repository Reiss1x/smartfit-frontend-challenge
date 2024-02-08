import React, { useEffect, useState } from 'react'
import IconHour from '../_material/images/icon-hour.png'

export default function Form( {onSubmit} ) {
  const [data, setData] = useState();
  const [closeBox, setCloseBox] = useState(false);
  const [results, setResults] = useState(0);
  const [checkbox, setCheckbox] = useState(null);

  useEffect(() => {
    fetch("https://test-frontend-developer.s3.amazonaws.com/data/locations.json")
    .then(res => res.json())
    .then(data => {
      setData(data)
      setResults(0)
      console.log(data)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    let cities;
    if(!closeBox){
      cities = data.locations.filter(filterUnits)
    } else {
      cities = data.locations;
    }
    setResults(cities.length)
    onSubmit(checkbox);
  }

  const filterUnits = (unit) => {
    let open, closed;
    switch (checkbox) {
      case 0:
        return false;
      case 1:
        open = 6;
        closed = 12;
        break;
      case 2:
        open = 12;
        closed = 18;
        break;
      case 3:
        open = 18;
        closed = 23;
        break; 
    }

    if (unit.opened){
      let openHr = parseInt(open, 10)
      let closeHr = parseInt(closed, 10)
      let [unit_open, unit_close] = unit.schedule[0].hour.split(' ás ')
      let unit_op_hour = parseInt(unit_open.replace("h", ''), 10)
      let unit_close_hour = parseInt(unit_close.replace("h", ''), 10)

      if (unit_op_hour <= openHr && unit_close_hour >= closeHr) return true
      else return false
    } else return false
  

  };
  
  const handleChange = (event) => {
    setCheckbox(event.target.value)
  };

  const handleBoxChange = () => {
    setCloseBox(!closeBox)
    
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

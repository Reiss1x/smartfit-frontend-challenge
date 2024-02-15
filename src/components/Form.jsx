import React, { useEffect, useState } from 'react'
import IconHour from '../_material/images/icon-hour.png'

export default function Form( {onSubmit} ) {
  const [data, setData] = useState();
  const [closeBox, setCloseBox] = useState(false);
  const [results, setResults] = useState(0);
  const [checkbox, setCheckbox] = useState(0);

  useEffect(() => {
    fetch("https://test-frontend-developer.s3.amazonaws.com/data/locations.json")
    .then(res => res.json())
    .then(data => {
      setData(data)
      console.log(data)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    let cities = [];
    if(closeBox){
      cities = data.locations;
    }
    if (!closeBox && checkbox != 0){
      cities = data.locations.filter(filterUnits)
    }
    setResults(cities.length)
    onSubmit(cities);
  };

  const handleReset = () => {
    onSubmit([])
    setResults(0)
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
        closed = 22; 
        break; 
    }

    if (unit.opened){
      const [unit_open, unit_close] = unit.schedules[0].hour.split(' às ')
      let unit_op_hour = parseInt(unit_open.replace("h", ''), 10)
      let unit_close_hour = parseInt(unit_close.replace("h", ''), 10)

      if (unit_op_hour <= open && unit_close_hour >= closed){
        return true;
      } else {
        return false;
      }
    } else return false
  };
  
  const handleChange = (event) => {
    setCheckbox(parseInt(event.target.value))
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
              <label > <input type="radio"  value={1} checked={checkbox === 1} onChange={handleChange}/> Manhã </label>
              <span> 06:00 às 12:00 </span>
            </div>
            <div className='buttons'>
              <label > <input type="radio" value={2} checked={checkbox === 2} onChange={handleChange}/> Tarde </label>
              <span> 12:01 às 18:00 </span>
            </div>
            <div className='buttons'>
              <label > <input type="radio" value={3} checked={checkbox === 3} onChange={handleChange}/> Noite </label>
              <span> 18:01 às 23:00 </span>
            </div>
              <div className='box-footer'>
                <label> <input type='checkbox'checked={closeBox} onChange={handleBoxChange}/> Exibir unidades fechadas</label>
                <span>Resultados encontrados: {results}</span>
              </div>
              <div className='lower-buttons'>
                <button className='find' type='submit'> ENCONTRAR UNIDADE </button>
                <button className='clear' type='reset' onClick={handleReset}> LIMPAR </button>
              </div>
        </form>
      </div>
    </div>
  )
}

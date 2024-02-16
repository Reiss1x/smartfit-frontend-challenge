import './App.css'
import SmartLogo from "./_material/images/logo.svg"
import Form from './components/Form.jsx';
import Info from './components/Info.jsx';
import React, { useEffect, useState } from 'react'
import Units from './components/Units.jsx';
const App = () => {
  const [cidades, setCidades] = useState([]);
  const [count, setCount] = useState(0);
  
  const handleSubmit = (data) => {
    setCidades(data);
    console.log(data);
    console.log(cidades);
  }

  return (
    <div >
      <div className='page-header'>
        <img src={SmartLogo} alt="Logo" className='smart-logo' />
      </div>
      <div className='page-body'>
        <div className='text-content'>
        <h1>
        REABERTURA <br/>SMART FIT
        </h1>
        <p className='gray-thing'></p>
        <p>
          O horário de funcionamento das nossas   unidades está seguindo os decretos de cada  município. Por isso, confira aqui se a sua   unidade está aberta e as medidas de   segurança que estamos seguindo.
        </p>
        </div>
        <Form onSubmit={handleSubmit}/>
        <Info/>
        <div className='units'>       
          {cidades.length > 0 && cidades.map(obj => (
          <Units data = {obj}/>
        ))}      
        </div>
      </div>
      <div className='page-footer'>
        <img src={SmartLogo} alt="Logo" className='smart-logo-footer' />
        Todos os direitos reservados - 2020
      </div>
    </div>      
      
  ) 
};

export default App

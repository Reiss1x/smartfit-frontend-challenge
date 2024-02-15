import './App.css'
import Header from "./components/Header.jsx"
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
        <Header />
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
         {/* && cidades.map(obj => (
          <Units {...obj}/>
        )) */}
        <Info/>
        {cidades.length > 0 && cidades.map(obj => (
          <Units data = {obj}/>
        ))}
      </div>
    </div>      
      
  ) 
};

export default App

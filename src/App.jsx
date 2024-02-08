import './App.css'
import Header from "./components/Header.jsx"
import Form from './components/Form.jsx';
import Info from './components/Info.jsx';
import React, { useEffect, useState } from 'react'
const App = () => {
  const [cidades, setCidades] = useState([]);

  

  const handleSubmit = (data) => {
    if (!data === 0){
      data.map((obj) => obj.locations.schedules.hour )
    }
    setCidades(data);
  }

  const [count, setCount] = useState(0);

  return (
    <div >
      <Header />
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
      {/* {cidades.map(home => <div>{cidades.locations.title}</div>)} */}
    </div>
  ) 
};

export default App

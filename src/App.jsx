import './App.css'
import Header from "./components/Header.jsx"
import Form from './components/Form.jsx';
import React from 'react'
const App = () => {

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
      <Form/>
      
    </div>
  ) 
};

export default App

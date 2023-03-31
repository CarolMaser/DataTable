import React, {  useState, useEffect } from 'react';
import './App.css';
import Table from './Table/Table';


function App() {

  const [data, setData] = useState([])
  const [columns, setColumns] = useState([])

  const loadingHeader = () => {

    setColumns ({
      Municipio_Ano_Tipo: 'Ano - Tabela',
      JAN: 'Janeiro',
      FEV: 'Fevereiro',
      MAR: 'Março',
      ABR: 'Abril',
      MAI: 'Maio',
      JUN: 'Junho',
      JUL: 'Julho',
      AGO: 'Agosto',
      SET: 'Setembro',
      OUT: 'Outubro',
      NOV: 'Novembro',
      DEZ: 'Dezembro'
    })
    return setColumns
    
  }

  const loadingBody = () => {

    setData ({
      Municipio_Ano_Tipo: 'Conta Corrente - 2023',
      JAN: 'Ok',
      FEV: 'Ok',
      MAR: 'Ok ',
      ABR: 'Ok',
      MAI: ' ',
      JUN: 'Ok',
      JUL: ' ',
      AGO: 'Ok',
      SET: ' ',
      OUT: 'Ok',
      NOV: 'Ok',
      DEZ: 'Ok'
    })
    return setData

  }

  useEffect(() => {
    loadingHeader()
    loadingBody()
  }, [])
  
  return (
    <div className='App'>
      <Table columns={columns} data={data} />
    </div>
  );

}

export default App;

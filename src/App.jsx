import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'


function App() {

  //estado do current será modificado quando o hover mudar
  const [current, setCurrent] = useState(null); 
  //State para utilizar o arquivo data.json quando recibido da API
  const [data,setData] = useState(null);

  //recebendo os dados do arquivo data.json a partir de um npm local server
  useEffect(() => {
    const fetchRepos = async () => {
      const repos = await fetch('http://localhost:3000/languages')
      
      const data = await repos.json()
      setData(data) // atualizando o conteudo de data para o arquivo recebido
    }
    fetchRepos()
  },[])

  return (
    
    <div className="App">
    {/* controle do current de acordo com o local do mouse */}
    <button onMouseEnter={() => {setCurrent('0')}} onMouseLeave={() => {setCurrent(null)}} className='evisao'>1</button>
    <button onMouseEnter={() => {setCurrent('1')}} onMouseLeave={() => {setCurrent(null)}} className='evisao'>2</button>
    <button onMouseEnter={() => {setCurrent('2')}} onMouseLeave={() => {setCurrent(null)}} className='evisao'>3</button>
    <button onMouseEnter={() => {setCurrent('3')}} onMouseLeave={() => {setCurrent(null)}} className='evisao'>4</button>
    { data[current] && <div><strong>{data[current].info}</strong></div>}
    {/* se existe algo em data[current] um span é criado para conter os dados  */}
    </div>
  )
}

export default App

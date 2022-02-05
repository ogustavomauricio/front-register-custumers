import React, {useEffect, useState, } from 'react';
import { useParams } from 'react-router-dom'
import api from '../services/api';
// import sucessMenssage from '../componets/registerSucess';

export default function UpdateCustumer() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    //useParams é para pegar o Id que foi passado por paramentro
    const { id } = useParams();

    useEffect(() => {
      async function getCustumer() {
         const result = await api.get(`/custumers/${id}`);
// console.log('RESULT',result);
        setName(result.data.name)
        setAge(result.data.age)
        setCity(result.data.city)
        setState(result.data.state)
         
      }
      getCustumer()
    }, [])

    async function handleSubmit(){
        const data = {name, age, city, state, id}
        console.log(data);
        const { status } = await api.put(`/custumers/${id}`, data)
        console.log(status);
        if (status === 200){
            window.location.href='/getallcustumers'
        } else {
            alert('Erro ao atualizar o Cliente')
        }
    };

    return(
        <div>
            <div>
                <h2>Atualizar de Cadastro</h2>
            </div>
            <form>
                <label htmlFor='name'>
                    Nome:
                    <input 
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id='name'
                      placeholder='Nome'
                    />  
                </label>
                <label htmlFor='age'>
                    Idade:
                    <input 
                      type="text"
                      name='age'
                      id='age'
                      value={age}
                      onChange={e => setAge(e.target.value)}
                    />  
                </label>
                <label htmlFor='city'>
                    Cidade:
                    <input 
                      type="text"
                      name='city'
                      id='city'
                      placeholder='Cidade'
                      value={city}
                      onChange={e => setCity(e.target.value)}
                    />  
                </label>
                <label htmlFor='state'>
                    Estado:
                    <input 
                      type="text"                  
                      id='state'
                      placeholder='Estado'
                      name='state'
                      value={state}
                      onChange={e => setState(e.target.value)}
                    />  
                </label>
               <button type='button' onClick={handleSubmit}>Atualizar</button>
            </form>
        </div>
    )
}
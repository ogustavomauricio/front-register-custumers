import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../services/api";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import "../styles/register.css";


export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

// Em react-router-dom v6 useHistory() é substituído por useNavigate()
  const navigate = useNavigate();//chamado do hook

  async function handleSubmit(e) {
    e.preventDefault();

    const data = { name, age, city, state };
    // console.log(data);
    await api.post("/custumers", data);
    navigate('/getallcustumers');

// APÓS OS DADOS ENVIADOS ISSO LIMPA O FORM. MAS COMO ESTOU USANDO O NAVIGATE ISSO NÃO SE FAZ NECESSÁRIO COLOQUEI APENAS PARA REGISTRO.
    setName('');
    setAge('');
    setCity('');
    setState('');
  };

  return (
    <div className="container">
      <div className="container-interno">
        <div className="conteiner-text">
          <h2>Formulário de Cadastro</h2>
        </div>

        <form>
					<div className="wrapper">
					  <div className="input-single">          
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                required
							  className="input"
							  autoComplete="off"
              />
              <label htmlFor="name">Nome</label>
					  </div>
						<div className="input-single">          
              <input
                type="text"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                id="age"
                required
							  className="input"
							  autoComplete="off"
              />
              <label htmlFor="age">Idade</label>
					  </div>
					  <div className="input-single">          
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                id="city"
                required
							  className="input"
							  autoComplete="off"
              />
              <label htmlFor="city">Cidade</label>
					  </div>
						<div className="input-single">          
              <input
                type="text"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                id="state"
                required
							  className="input"
							  autoComplete="off"
              />
              <label htmlFor="state">Estado</label>
					  </div>
            <ButtonGroup  aria-label="outlined primary button group" className="button">             
                <Button 
                  color="primary" 
                  onClick={handleSubmit}
                >
                  Cadastrar 
                </Button>              
              <Button color="primary" href='/getallcustumers'>
                Buscar Clientes
              </Button>
              <Button color="primary" href='/'>
                Voltar
              </Button>
            </ButtonGroup>
         
				</div>
        {/* <button type='button' onClick={handleSubmit}>
          Cadastrar
        </button>
        <button type='button' onClick={handleSubmit}>
          Lista de Clientes
        </button> */}

    
        </form>
        {/* {
        retorno === 201 ? alert('Cliente Cadastrado com sucesso') : null} */}
			</div>
    </div>
  );
}

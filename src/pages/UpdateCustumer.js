import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Button from "@material-ui/core/Button";

import '../styles/register.css'

export default function UpdateCustumer() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  //useParams é para pegar o Id que foi passado por paramentro
  const { id } = useParams();

  useEffect(() => {
    async function getCustumer() {
      const result = await api.get(`/custumers/${id}`);
      // console.log('RESULT',result);
      setName(result.data.name);
      setAge(result.data.age);
      setCity(result.data.city);
      setState(result.data.state);
    }
    getCustumer();
  }, []);

  async function handleSubmit() {
    const data = { name, age, city, state, id };
    console.log(data);
    const { status } = await api.put(`/custumers/${id}`, data);
    console.log(status);
    if (status === 200) {
      window.location.href = "/getallcustumers";
    } else {
      alert("Erro ao atualizar o Cliente");
    }
  }

  return (
    <div className="container">
      <div className="container-interno">
        <div className="conteiner-text">
          <h2>Atualizar de Cadastro</h2>
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
								className="input"              
              />
              <label htmlFor="name">Nome</label>
            </div>

            <div className="input-single">
              <input
                type="text"
                name="age"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
								className="input"
              />
              <label htmlFor="age">Idade</label>
            </div>

            <div className="input-single">
              <input
                type="text"
                name="city"
                id="city"
                className="input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <label htmlFor="city">Cidade:</label>
            </div>

            <div className="input-single">
              <input
                type="text"
                id="state"
                className="input"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <label htmlFor="state">Estado</label>
            </div>
            <div className="button-container">
              <div className="button1">
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleSubmit}
                >
                  Atualizar
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

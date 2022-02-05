import React from "react";

import "../styles/home.css";
import Button from "@material-ui/core/Button";


export default function Home() {
  return (
    <div className="container">
      <div className="box">     
        <h2>Seja Bem Vindo</h2>
        <div className="container-button">  
        <div className="button1">
          <Button
            variant="outlined"
            color="secondary"
            href="/registercustumers"
          >
            Cadastrar Cliente
          </Button>
        </div>

        <div>
          <Button variant="outlined" color="secondary" href="/getallcustumers">
            Buscar Clientes
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
}

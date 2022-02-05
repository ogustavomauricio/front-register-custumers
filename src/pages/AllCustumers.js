import React, { useState, useEffect } from "react";
import api from "../services/api";

import "../styles/allcustumers.css";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function AllCustumers() {
  const [custumers, setCustumers] = useState([]);

  useEffect(() => {
    async function getCustumers() {
      const { data } = await api.get("/custumers");
      console.log(data);
      setCustumers(data);
    }
    getCustumers();
  }, []);

  async function handleDelete(id) {
    const { _id } = id;
    // console.log(_id);
    if (window.confirm("Deseja excluir este cliente?")) {
      const { status } = await api.delete(`/custumers/${_id}`);
      if (status === 200) {
        window.location.href = "/getallcustumers";
      } else {
        alert("Ocorreu um erro.Tente Novamente");
      }
    }
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <div>
          <h2>Clientes Cadastrados</h2>
        </div>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Idade</TableCell>
              <TableCell align="center">Cidade</TableCell>
              <TableCell align="center">Estado</TableCell>
              <TableCell align="center">Botões</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {custumers.map((custumer) => (
              <TableRow key={custumer.id}>
                <TableCell component="th" scope="custumer">
                  {custumer.name}
                </TableCell>
                <TableCell align="center">{custumer.age}</TableCell>
                <TableCell align="center">{custumer.city}</TableCell>
                <TableCell align="center">{custumer.state}</TableCell>
                <TableCell align="center">
                  <ButtonGroup aria-label="outlined primary button group">
                    <Button
                      color="primary"
                      href={"/updatecustumers/" + custumer._id}
                    >
                      Editar
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() => handleDelete(custumer)}
                    >
                      Deletar
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="button">
      <Button
        variant="contained"
        color="secondary"
        href="/registercustumers"
        className="btnVoltar"
      >
        Voltar
      </Button>
      </div>
    </div>
  );
}

import React from 'react';

import '../styles/home.css'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Home() {
  return (
 <div className='container'>
   <div className='box'> 
    <ButtonGroup  aria-label="outlined primary button group">
    <Button color="primary" href='/registercustumers'>Cadastrar Cliente</Button>
    <Button color="primary" href='/getallcustumers'>Buscar Clientes</Button>
  </ButtonGroup>
  </div>
 </div>
    

    

          
        

     
  );
}

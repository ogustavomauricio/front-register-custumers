import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCustumers from './pages/AllCustumers';
import Home from './pages/Home';
import AddressForm from "./pages/registerCustumes";
import UpdateCustumer from './pages/UpdateCustumer';


export default function Router() {
  return (
<BrowserRouter>
  <Routes>
    <Route path='/' element={ <Home />} />
    <Route path='/registercustumers' element={ <AddressForm />} />
    <Route path='/getallcustumers' element={ <AllCustumers />} />
    <Route path='/updatecustumers/:id' element={ <UpdateCustumer />} />
  </Routes>
</BrowserRouter>
  );
}



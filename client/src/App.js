import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AllPets from './components/AllPets';
import PetForm from './components/PetForm';
import OnePet from './components/OnePet';
import EditPetForm from './components/EditPetForm';


function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Pet Shelter</h1>
        <Switch>
          <Route exact path='/'>
            <AllPets></AllPets>
          </Route>
          <Route exact path='/pets/new'>
            <PetForm></PetForm>
          </Route>
          <Route exact path='/pets/:_id'>
            <OnePet></OnePet>
          </Route>
          <Route exact path='/pets/:_id/edit'>
            <EditPetForm></EditPetForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

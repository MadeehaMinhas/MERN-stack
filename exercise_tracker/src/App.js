import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateExercise from './Components/CreateExercise_component';
import CreateUser from './Components/CreateUser_component';
import EditExercise from './Components/EditExercise_component';
import ExerciseList from './Components/ExerciseList_component';
import NavBar from './Components/Navbar_component';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import './App.css';

function App() {
  
  return (
    <BrowserRouter>
    
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path='/' component={ExerciseList } />
      <Route path='/create' component={CreateExercise } />
      <Route exact path='/edit/:id' component={EditExercise } />
      <Route path='/user' component={CreateUser } />
      </Switch>
    
      <br />
    </div>
    
    </BrowserRouter>
  );
}

export default App;

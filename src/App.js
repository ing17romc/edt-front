
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UI from '../src/components/controls';
import Form from './pages/Forms';
import Modals from './pages/Modals';
import Icons from './pages/Icons';
import Controls from './pages/Controls';
import Description from './pages/Description';
import '../src/scss/index.scss';


const leftOptions = [
  { path: '/', name: 'Menu' },
  { path: '/About', name: 'Acerca de' },


];
const options = [
  { path: '/Forms', name: 'Formularios', nameIcon: 'AppDefault' },
  { path: '/Modals', name: 'Modales', nameIcon: 'AppDefault' },
  { path: '/Icons', name: 'Iconos', nameIcon: 'AppDefault' },
  { path: '/Controls', name: 'Controles', nameIcon: 'AppDefault' },
];

const rightOptions = [{ path: '/Salir', name: 'Salir' },];


function App() {
  return (<div className='main-container bg-white'>
    <Router>
      <Route path='/' render={() =>
        <UI.NavBar
          leftOptions={leftOptions}
          rightOptions={rightOptions}
        />
      } />

      <Route exact path='/' render={() =>
        <UI.Menu
          options={options}
        />
      } />
      <Route exact path='/About' render={() =>
        <Description
          description='Acerca de ...'
        />
      } />
      <Route exact path='/Salir' render={() =>
        <Description
          description='Salir ...'
        />
      } />
      <Route path='/Forms' component={Form} />
      <Route exact path='/Modals' component={Modals} />
      <Route exact path='/Icons' component={Icons} />
      <Route exact path='/Controls' component={Controls} />
    </Router>
  </div>);
}

export default App;

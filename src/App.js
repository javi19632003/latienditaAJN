import './App.css'
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>

          <div className="enlinea">
              <img src='./latiendita.png' alt='' />
              <h1>La Tiendita AJN</h1> 
          </div>
          <div className="enlinea"> 
              <NavBar />
          </div>

          <Switch>
            <Route path='/' exact>
              <ItemListContainer titulo = 'Camaras de Fotos' />
            </Route>
            <Route path='/:cate/:id' exact>
              <ItemListContainer titulo = '** Camaras de Fotos' />
            </Route>
          </Switch>
        </div>   
      </BrowserRouter>
    </>
  );
}

export default App;

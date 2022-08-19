import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create'
import Header from './components/Header';
import './App.css'
import ShowList from './components/ShowList';
import EditList from './components/EditList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/show/:id" component={ShowList} />
          <Route exact path="/edit/:id" component={EditList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

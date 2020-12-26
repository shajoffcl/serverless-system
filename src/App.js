import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Comments from './Component/Comments/Comments'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Comments} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

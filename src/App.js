
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ContactPage from './app/ContactPage/ContactPage';

function App() {
  return (
    <div>
       <Switch>
         <Route exact path='/' component={ContactPage} />
       </Switch>
    </div>
  );
}

export default App;

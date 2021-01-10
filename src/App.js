
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ContactPage from './app/ContactPage/ContactPage';
import ProjectPage from './app/ProjectPage/ProjectPage';

function App() {
  return (
    <div>
       <Switch>
         <Route exact path='/project' component={ProjectPage} />
         <Route exact path='/contact' component={ContactPage} />
       </Switch>
    </div>
  );
}

export default App;

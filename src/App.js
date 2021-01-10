
import { Route, Switch } from 'react-router-dom';
import AboutPage from './app/AboutPage/AboutPage';
import ContactPage from './app/ContactPage/ContactPage';
import HomePage from './app/HomePage/HomePage';
import ProjectPage from './app/ProjectPage/ProjectPage';

import './App.css';

function App() {
  return (
    <div>
       <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/project' component={ProjectPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/about' component={AboutPage} />
       </Switch>
    </div>
  );
}

export default App;

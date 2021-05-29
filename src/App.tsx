import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

import 'bulma/css/bulma.min.css';
import styles from './App.module.css';

import Dashboard from './pages/Dashboard';
import NavigationComponent from './components/Navigation';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <nav>
          <NavigationComponent />
        </nav>

        <section className={styles.content}>
          <Switch>
            <Route path="/crypto">
              <Dashboard />
            </Route>
            <Route path="/rewards">
              <h3>Rewards</h3>
            </Route>
            <Route path="/cards">
              <h3>Cards</h3>
            </Route>
            <Redirect from={`/`} to={`/crypto`} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;

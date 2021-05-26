import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// Right now importing bulma just for its reset css
import 'bulma/css/bulma.min.css';
import styles from './App.module.css';

import LoadingPage from './LoadingPage';
import DashboardPage from './DashboardPage';
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
              <DashboardPage />
            </Route>
            <Route path="/rewards">
              <h3>Rewards</h3>
            </Route>
            <Route path="/cards">
              <h3>Cards</h3>
            </Route>

            {/* <Route path="/">
            <LoadingPage />
          </Route> */}
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;

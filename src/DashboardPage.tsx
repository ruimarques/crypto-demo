import { Switch, Route } from 'react-router-dom';

import styles from './DashboardPage.module.css';
import CryptoTabsComponent from './components/CryptoTabs';
import { useRouteMatch } from 'react-router-dom';
import PortfolioComponent from './components/Portfolio';

const DashboardPage = () => {
  let match = useRouteMatch();

  return (
    <>
      <CryptoTabsComponent />

      <Switch>
        <Route path={`${match.path}/portfolio`}>
          <PortfolioComponent />
        </Route>
        <Route path={`${match.path}/prices`}>
          <h3>prices page</h3>
        </Route>
      </Switch>
    </>
  );
};

export default DashboardPage;
